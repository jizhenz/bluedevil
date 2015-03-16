 

(function( prime, $, kendo, undefined) {

    prime.menu_chinese =
    [
        {
            text: "<strong>主页</strong>",
            encoded: false
        },
        {
            text: "<strong>服务</strong>", encoded: false,
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
            text: "<strong>解决方案</strong>", encoded: false,
            items: [
                { text: "智慧城市解决方案"},
                { text: "智能交通解决方案"}
            ]
        },
        {
            text: "<strong>案例</strong>", encoded: false,
            items: [
                { text: "案例1"},
                { text: "案例2"}
            ]
        },
        {
            text: "<strong>关于我们</strong>", encoded: false,
            items: [
                { text: "公司简介"},
                { text: "我们的团队"},
                { text: "公司理念"},
                { text: "业务简介"},
                { text: "联系我们"}
            ]
        }
    ];

    prime.menu_lang_chinese =
    [
        {
            text: "欢迎浏览蓝魔软件"
        },
        {
            text: "中文",
            items: [
                { text: "中文"},
                { text: "English"}
            ]
        },
        {
            text: "", imageUrl: "img/logoBlueDevil.jpg"
        }
    ]
}(window.prime = window.prime || {}, jQuery, kendo ));