data = [
    {
        "id": 1,
        "realName": "广东省",
        "userName": "广东省",
        "children": [
            {
                "id": 3,
                "realName": "佛山市",
                "userName": "佛山市",
                "children": [
                    {
                        "id": 105,
                        "realName": "禅城区",
                        "userName": "禅城区",
                        "children": []
                    },
                    {
                        "id": 115,
                        "realName": "高明区",
                        "userName": "高明区",
                        "children": []
                    },
                    {
                        "id": 116,
                        "realName": "三水区",
                        "userName": "三水区",
                        "children": []
                    },
                    {
                        "id": 143,
                        "realName": "南海区",
                        "userName": "南海区",
                        "children": []
                    }
                ]
            },
            {
                "id": 90,
                "realName": "广州市",
                "userName": "广州市",
                "children": [
                    {
                        "id": 106,
                        "realName": "天河区",
                        "userName": "天河区",
                        "children": []
                    },
                    {
                        "id": 113,
                        "realName": "海珠区",
                        "userName": "海珠区",
                        "children": []
                    },
                    {
                        "id": 114,
                        "realName": "增城区",
                        "userName": "增城区",
                        "children": []
                    }
                ]
            },
            {
                "id": 109,
                "realName": "清远市",
                "userName": "清远市",
                "children": [
                    {
                        "id": 110,
                        "realName": "清城区",
                        "userName": "清城区",
                        "children": []
                    },
                    {
                        "id": 119,
                        "realName": "连州县",
                        "userName": "连州县",
                        "children": []
                    }
                ]
            }
        ]
    }
]


// for (let i = 0; i < data.length; i++){
    
// }
// //用于回调的函数
// const check = (data, list) => {
//     data.forEach((item) => {
//         if (item.children && item.children.length > 0) {
//             check(item.children, list);
//         } else {
//             var[err, res1] = await uni.request({
// 						url: getApp().globalData.host+"/dept/listUserByDept?token="+uni.getStorageSync("user").token+"&&deptId="+res.data.data[j].id,
// 						method:"POST"
// 					})
// 					this.userlist[j].children=res1.data.data;
//         }
//     });
//     return list;
// };
// //调用此函数 返回的就是最底层的数据
// const checkData = (data) => {
//     const list = [];
//     return check(data, list);
// };

// console.log(checkData(data));


data.forEach(async (item) => {
    item.id = 8;
})
console.log(data);
// for (let i = 0; i < res.data.data.length; i++) {
//     this.userlist.push({
//         id: res.data.data[i].id,
//         realName: res.data.data[i].name,
//         userName: res.data.data[i].name
//     })
//     console.log(this.userlist);
// }
// let arr = [];
// for (let i = 0; i < data.length; i++){
//     const tmparr = {
//         id: data[i].id,
//         name:data[i].name
//     }
//     tmparr.children = [];
//     if (data[i].subDeptList.length != 0) {
//         fun(data[i].subDeptList, tmparr);
//     }
//     arr.push(tmparr);
// }

// function fun (obj, array) {
//     for (let i = 0; i < obj.length; i++){
//         const tmparr = {
//             id: obj[i].id,
//             name: obj[i].name
//         }
//         tmparr.children = []
//         if (obj[i].subDeptList.length != 0) {
//             fun(obj[i].subDeptList,tmparr)
//         }
//         // console.log(tmparr);
//         array.children.push(tmparr)
//     } 
// }


