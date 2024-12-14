const data = {
    "car_list": [
        {
            "name": "tata harrier",
            "car_id": 1,
            "car_category": "regular",
            "allowed_user_level": [
                1,
                2,
                3,
                4,
                5
            ],
            "is_request": true
        },
        {
            "name": "toyota fortuner",
            "car_id": 2,
            "car_category": "executive",
            "allowed_user_level": [
                3,
                4,
                5
            ],
            "is_request": true
        },
        {
            "name": "mercedes maybach",
            "car_id": 3,
            "car_category": "premium",
            "allowed_user_level": [
                5
            ],
            "is_request": false
        },
        {
            "name": "jaguar f pace",
            "car_id": 4,
            "car_category": "premium",
            "allowed_user_level": [
                5
            ],
            "is_request": true
        },
        {
            "name": "ferrari f40",
            "car_id": 5,
            "car_category": "premium",
            "allowed_user_level": [
                5
            ],
            "is_request": false
        },
        {
            "name": "honda civic",
            "car_id": 6,
            "car_category": "executive",
            "allowed_user_level": [
                3,
                4,
                5
            ],
            "is_request": true
        }
    ],
    "department_data": {
        "department_master": [
            {
                "department_code": 1,
                "department_name": "Seinor Developers"
            },
            {
                "department_code": 2,
                "department_name": "Team Leads"
            },
            {
                "department_code": 3,
                "department_name": "Project Managers"
            },
            {
                "department_code": 4,
                "department_name": "Tech Leads"
            },
            {
                "department_code": 5,
                "department_name": "Co-Founder"
            }
        ],
        "permission_deparment_wise": {
            "allowed": [
                {
                    "department_code": [
                        1,
                        2,
                        3,
                        5
                    ]
                }
            ]
        }
    },
    "user_list": [
        {
            "department_code": 1,
            "user_name": "Mark",
            "user_level": 3,
            "is_request": true
        },
        {
            "department_code": 5,
            "user_name": "John",
            "user_level": 5,
            "is_request": false
        },
        {
            "department_code": 2,
            "user_name": "Luis",
            "user_level": 1,
            "is_request": true
        },
        {
            "department_code": 3,
            "user_name": "Celvin",
            "user_level": 3,
            "is_request": false
        },
        {
            "department_code": 4,
            "user_name": "Martin",
            "user_level": 4,
            "is_request": false
        },
        {
            "department_code": 2,
            "user_name": "Prakash",
            "user_level": 1,
            "is_request": true
        }
    ]
}

const carList = data.car_list
const department_data = data.department_data
const userList = data.user_list
const allowedDeptCodes = department_data.permission_deparment_wise.allowed[0].department_code
let result = [];

function getDeptname(dept_code) {
    if(department_data.department_master){
        const deptData = department_data.department_master
        const deptName = deptData.find((dept) => dept.department_code == dept_code).department_name 
        return deptName || "Unknown"
    }
}

function getCars(level, temp) {
    carList.forEach((car) => {
        if (car.allowed_user_level.includes(level) && car.is_request) {
            temp.AllowedCars.push(car.name)
        }
    })
}

userList.forEach((user) => {
    let temp = {}
    temp.Name = user.user_name
    temp.DepartmentName = getDeptname(user.department_code)
    if (!allowedDeptCodes.includes(user.department_code)) {
        temp.AllowedCars = "Department Not allowed Cars";
    }
    else {
        temp.AllowedCars = []
        if (user.is_request) {
            getCars(user.user_level, temp)
        }
    }
    result.push(temp);
});

console.log(data.car_list)




