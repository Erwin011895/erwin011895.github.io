package main

import (
	"bytes"
	"encoding/json"
	"log"
	"os"
	"reflect"
	"strings"
	"time"
)

const (
	MainTemplatePath = "templates/main.html"

	ExperienceKey      = "experiences"
	ExperienceItemPath = "templates/experienceItem.html"

	ProjectKey      = "projects"
	ProjectItemPath = "templates/projectItem.html"

	SkillKey      = "skills"
	SkillItemPath = "templates/skillItem.html"

	CertificationKey  = "certifications"
	CertificationPath = "templates/certificationItem.html"

	AwardKey  = "awards"
	AwardPath = "templates/awardItem.html"

	DataJSONPath   = "data.json"
	OutputFilePath = "index.html"
)

var mappingTemplate = map[string]string{
	ExperienceKey:    ExperienceItemPath,
	SkillKey:         SkillItemPath,
	ProjectKey:       ProjectItemPath,
	CertificationKey: CertificationPath,
	AwardKey:         AwardPath,
}

var (
	beforeMain []byte
	beforeData []byte
)

func main() {
	beforeMain = []byte("")
	beforeData = []byte("")
	for {
		templateByte := readFile(MainTemplatePath)
		if !bytes.Equal(beforeMain, templateByte) {
			generate()
		}

		templateByte = readFile(DataJSONPath)
		if !bytes.Equal(beforeData, templateByte) {
			generate()
		}
		time.Sleep(1000 * time.Millisecond)
	}
}

func generate() {
	dataJsonByte := readFile(DataJSONPath)

	var dataJsonMap map[string]interface{}
	err := json.Unmarshal(dataJsonByte, &dataJsonMap)
	if err != nil {
		panic(err)
	}

	mainTemplateByte := readFile(MainTemplatePath)
	templateString := string(mainTemplateByte)

	for k, v := range dataJsonMap {
		t := reflect.TypeOf(v)
		if t.Kind() == reflect.String {
			templateString = strings.ReplaceAll(templateString, "{{"+k+"}}", v.(string))
		} else if t.Kind() == reflect.Slice {
			resp := sliceHandle(k, v.([]interface{}))
			for k2, v2 := range resp {
				templateString = strings.ReplaceAll(templateString, "{{"+k2+"}}", v2)
			}
		}
	}

	index, err := os.Create(OutputFilePath)
	if err != nil {
		panic(err)
	}

	_, err = index.WriteString(templateString)
	if err != nil {
		panic(err)
	}
	log.Println("generate() success")

	beforeMain = mainTemplateByte
	beforeData = dataJsonByte
}

func sliceHandle(key string, slice []interface{}) map[string]string {
	filePath := ""

	filePath, ok := mappingTemplate[key]
	if !ok {
		panic("key not found: " + key)
	}

	templateFile := string(readFile(filePath))
	result := ""
	for _, v := range slice {
		item := templateFile
		v2 := v.(map[string]interface{})
		for k, value := range v2 {
			item = strings.ReplaceAll(item, "{{"+k+"}}", value.(string))
		}
		result += item
	}

	return map[string]string{
		key: result,
	}
}

func readFile(temp string) []byte {
	templateByte, err := os.ReadFile(temp)
	if err != nil {
		panic(err)
	}
	return templateByte
}
