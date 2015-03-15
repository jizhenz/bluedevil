 

(function( prime, $, kendo, undefined) {

    prime.menu_chinese =
    [
        {
            text: "主页"
        },
        {
            text: "服务",
            items: [
                { text: "咨询",
                  items: [
                    { text: "IT 战略咨询" },
                    { text: "企业架构咨询"},
                    { text: "云架构咨询"}
                  ]
                },
                { text: "APP定制与开发"},
                { text: "大数据分析"},
                { text: "生物信息与生物医学图像"}
            ]
        },
        {
            text: "解决方案",
            items: [
                { text: "智慧城市解决方案"},
                { text: "智能交通解决方案"}
            ]
        },
        {
            text: "案例",
            items: [
                { text: "案例1"},
                { text: "案例2"}
            ]
        },
        {
            text: "关于我们",
            items: [
                { text: "公司简介"},
                { text: "我们的团队"},
                { text: "公司理念"},
                { text: "业务简介"},
                { text: "联系我们"}
            ]
        }
    ];

}(window.prime = window.prime || {}, jQuery, kendo ));