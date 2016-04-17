import { Scale } from '../object/obj.scale';


export var SCALES: Scale[] = [
    {
        "id": 1,
        "name": "agreement",
        "items": [
            {
                value:0,
                name: "Not Applicable/Don't Know"
            },
            {
                value:1,
                name: "Strongly Disagree"
            },
            {
                value:2,
                name: "Disagree"
            },
            {
                value:3,
                name: "Undecided"
            },
            {
                value:4,
                name: "Agree"
            },
            {
                value:5,
                name: "Strongly Agree"
            },
        ]
    },
    {
        "id": 2,
        "name": "Frequency",
        "items": [
            {
                value:0,
                name: "Not Applicable/Don't Know"
            },
            {
                value:1,
                name: "Very Frequently"
            },
            {
                value:2,
                name: "Frequently"
            },
            {
                value:3,
                name: "Occasionally"
            },
            {
                value:4,
                name: "Frequently"
            },
            {
                value:5,
                name: "Very Frequently"
            },
        ]
    },
    {
        "id": 3,
        "name": "Importance",
        "items": [
            {
                value:1,
                name: "Unimportant"
            },
            {
                value:2,
                name: "Of Little Importance"
            },
            {
                value:3,
                name: "Moderately Important"
            },
            {
                value:4,
                name: "Important"
            },
            {
                value:5,
                name: "Very Important"
            },
        ]
    },
    {
        "id": 4,
        "name": "Likelihood",
        "items": [
            {
                value:0,
                name: "Not Applicable/Don't Know"
            },
            {
                value:1,
                name: "Almost Never True"
            },
            {
                value:2,
                name: "Usually Not True"
            },
            {
                value:3,
                name: "Occasionally True"
            },
            {
                value:4,
                name: "Usually True"
            },
            {
                value:5,
                name: "Almost Always True"
            },
        ]
    },
    {
        "id": 5,
        "name": "yesNo",
        "items": [
            {
                value:1,
                name: "Yes"
            },
            {
                value:2,
                name: "No"
            }
        ]
    },
    {
        "id": 6,
        "name": "expertice",
        "items": [
            {
                value:0,
                name: "Not Applicable/Don't Know"
            },
            {
                value:1,
                name: "Less than Junior"
            },
            {
                value:2,
                name: "Junior"
            },
            {
                value:3,
                name: "Junior+"
            },
            {
                value:4,
                name: "Intermediate"
            },
            {
                value:5,
                name: "Intermediate+"
            },
            {
                value:6,
                name: "Senior"
            },
            {
                value:7,
                name: "Technical Authority"
            },
        ]
    }

];