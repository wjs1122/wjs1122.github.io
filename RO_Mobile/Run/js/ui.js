define(['jquery', 'underscore'], function ($, _) {
    var supportedLang = [
        /*{
            key: 'ja-JP',
            text: '日本語'
        },*/
		{
            key: 'ko-KR',
            text: '한국어'
        },
        {
            key: 'zh-TW',
            text: '正體中文'
        },
        {
            key: 'en-US',
            text: 'English'
        },
        {
            key: 'zh-CN',
            text: '简体中文'
        }
    ];
    var currentLang = '';
    var data = [];
    //navbar
    data["class"] =  { "ko-KR": "직업", "ja-JP": "", "zh-TW": "職業", "en-US": "Classes", "zh-CN": "职业" };
    data["type-1"] = { "ko-KR": "검사", "ja-JP": "", "zh-TW": "劍士系", "en-US": "Swordman", "zh-CN": "剑士系" };
    data["type-2"] = { "ko-KR": "법사", "ja-JP": "", "zh-TW": "魔法師系", "en-US": "Mage", "zh-CN": "魔法师系" };
    data["type-3"] = { "ko-KR": "도둑", "ja-JP": "", "zh-TW": "盜賊系", "en-US": "Thief", "zh-CN": "盗贼系" };
    data["type-4"] = { "ko-KR": "궁수", "ja-JP": "", "zh-TW": "弓箭手系", "en-US": "Archer", "zh-CN": "弓箭手系" };
    data["type-5"] = { "ko-KR": "복사", "ja-JP": "", "zh-TW": "服事系", "en-US": "Acolyte", "zh-CN": "服事系" };
    data["type-6"] = { "ko-KR": "상인", "ja-JP": "", "zh-TW": "商人系", "en-US": "Merchant", "zh-CN": "商人系" };

    data["typeBranch-11"] = { "ko-KR": "나이트", "ja-JP": "", "zh-TW": "騎士", "en-US": "Knight", "zh-CN": "骑士" };
    data["typeBranch-12"] = { "ko-KR": "팔라딘", "ja-JP": "", "zh-TW": "十字軍", "en-US": "Crusader", "zh-CN": "十字军" };
    data["typeBranch-21"] = { "ko-KR": "위저드", "ja-JP": "", "zh-TW": "巫師", "en-US": "Wizard", "zh-CN": "巫师" };
    data["typeBranch-22"] = { "ko-KR": "세이지", "ja-JP": "", "zh-TW": "賢者", "en-US": "Sage", "zh-CN": "贤者" };
    data["typeBranch-31"] = { "ko-KR": "어쌔신", "ja-JP": "", "zh-TW": "刺客", "en-US": "Assassin", "zh-CN": "刺客" };
    data["typeBranch-32"] = { "ko-KR": "로그", "ja-JP": "", "zh-TW": "流氓", "en-US": "Rogue", "zh-CN": "流氓" };
    data["typeBranch-41"] = { "ko-KR": "헌터", "ja-JP": "", "zh-TW": "獵人", "en-US": "Hunter", "zh-CN": "猎人" };
    data["typeBranch-42"] = { "ko-KR": "바드/댄서", "ja-JP": "", "zh-TW": "吟遊詩人/舞孃", "en-US": "Bard/Dancer", "zh-CN": "诗人/舞娘" };
    data["typeBranch-51"] = { "ko-KR": "프리스트", "ja-JP": "", "zh-TW": "祭司", "en-US": "Priest", "zh-CN": "牧师" };
    data["typeBranch-52"] = { "ko-KR": "몽크", "ja-JP": "", "zh-TW": "武道家", "en-US": "Monk", "zh-CN": "武僧" };
    data["typeBranch-61"] = { "ko-KR": "블랙스미스", "ja-JP": "", "zh-TW": "鐵匠", "en-US": "Blacksmith", "zh-CN": "铁匠" };
    data["typeBranch-62"] = { "ko-KR": "알케미스트", "ja-JP": "", "zh-TW": "鍊金術士", "en-US": "Alchemist", "zh-CN": "炼金术士" };

    data["search"] = { "ko-KR": "검색", "ja-JP": "検索", "zh-TW": "搜尋", "en-US": "Search", "zh-CN": "查询" };
    data["clear"] = { "ko-KR": "지우기", "ja-JP": "", "zh-TW": "清空", "en-US": "Clear", "zh-CN": "清空" };

    data["currentversion"] = { "ko-KR": "현재 버전", "ja-JP": "", "zh-TW": "當前版本：", "en-US": "Current Ver.:", "zh-CN": "当前版本：" };
    data["officalsite"] = { "ko-KR": "오피셜 사이트", "ja-JP": "", "zh-TW": "官網", "en-US": "Offical Site", "zh-CN": "官网" };
    data["donate"] = { "ko-KR": "기부", "ja-JP": "", "zh-TW": "送版主女裝", "en-US": "NGA RO", "zh-CN": "送版主女装" };

    data["ui"] = { "ko-KR": "UI", "ja-JP": "", "zh-TW": "界面語言", "en-US": "UI", "zh-CN": "界面语言" };
    data["data"] = { "ko-KR": "Data", "ja-JP": "", "zh-TW": "資料語言", "en-US": "Data", "zh-CN": "数据语言" };

    data["alertCBT"] = { "ko-KR": "경고 : 현재 CBT 서버 데이터를 사용중입니다.", "ja-JP": "", "zh-TW": "警告：正在使用測試服務器數據。", "en-US": "Warning:Currently using CBT server data.", "zh-CN": "警告：正在使用测试服务器数据。" };
    //rune panel
    data["evorune"] = { "ko-KR": "룬 페이지 확장", "ja-JP": "", "zh-TW": "進階符文", "en-US": "Evolution Rune", "zh-CN": "进阶符文" };
    data["disable"] = { "ko-KR": "비활성", "ja-JP": "", "zh-TW": "不啟用", "en-US": "Disable", "zh-CN": "不启用" };
    data["enable"] = { "ko-KR": "활성", "ja-JP": "", "zh-TW": "啟用", "en-US": "Enable", "zh-CN": "启用" };
    data["zoom"] = { "ko-KR": "확대배율", "ja-JP": "", "zh-TW": "縮放", "en-US": "Zoom", "zh-CN": "缩放" };
    data["algorithm"] = { "ko-KR": "룬 경로 알고리즘", "ja-JP": "", "zh-TW": "尋路算法", "en-US": "Pathfinding algorithm", "zh-CN": "寻路算法" };
    data["algorithm-simple"] = { "ko-KR": "최단경로", "ja-JP": "", "zh-TW": "最短路徑", "en-US": "Shortest Path", "zh-CN": "最短路径" };
    data["algorithm-nogold"] = { "ko-KR": "최소 금훈장", "ja-JP": "", "zh-TW": "最少金質勳章", "en-US": "Minimum Golden Badge", "zh-CN": "最少金质勋章" };
    data["algorithm-custom"] = { "ko-KR": "커스텀", "ja-JP": "", "zh-TW": "自定義", "en-US": "Custom", "zh-CN": "自定义" };
    data["weight"] = { "ko-KR": "가중치", "ja-JP": "", "zh-TW": "權重", "en-US": "Weights", "zh-CN": "权重" };
    data["contribution"] = { "ko-KR": "공헌도", "ja-JP": "", "zh-TW": "貢獻", "en-US": "Contribution", "zh-CN": "贡献" };
    data["goldmedal"] = { "ko-KR": "금훈장", "ja-JP": "", "zh-TW": "金質勳章", "en-US": "Golden Badge", "zh-CN": "金质勋章" };
    data["selected"] = { "ko-KR": "선택", "ja-JP": "", "zh-TW": "已選：", "en-US": "Selected:", "zh-CN": "已选：" };
    data["currentselected"] = { "ko-KR": "현재선택", "ja-JP": "", "zh-TW": "本次：", "en-US": "Current:", "zh-CN": "本次：" };
    data["saveimage"] = { "ko-KR": "룬 페이지 이미지 저장", "ja-JP": "", "zh-TW": "生成全符文圖片", "en-US": "Generate all rune image", "zh-CN": "生成全符文图片" };
    data["reset"] = { "ko-KR": "초기화", "ja-JP": "", "zh-TW": "重置本次選擇", "en-US": "Reset current selected", "zh-CN": "重置本次选择" };
    data["save"] = { "ko-KR": "저장", "ja-JP": "", "zh-TW": "保存", "en-US": "Save", "zh-CN": "保存" };
    //dialog
    data["runenotexist"] = { "ko-KR": "해당 룬을 찾을 수 없습니다. 룬페이지 확장을 활성화 해보시기 바랍니다.", "ja-JP": "", "zh-TW": "該符文不存在，請嘗試啟用進階符文", "en-US": "This rune is not exist, try enable Evolution Rune first", "zh-CN": "该符文不存在，请尝试启用进阶符文" };
    data["generating"] = { "ko-KR": "생성중...", "ja-JP": "", "zh-TW": "生成中……", "en-US": "Generating...", "zh-CN": "生成中……" };
    data["generateerror"] = { "ko-KR": "생성 에러", "ja-JP": "", "zh-TW": "生成圖片異常", "en-US": "Generate Error", "zh-CN": "生成图片异常" };
    data["confirmreset"] = { "ko-KR": "현재 선택된 룬 정보를 초기화하시겠습니까?", "ja-JP": "", "zh-TW": "是否重置本次選擇？", "en-US": "Confirm reset current selected?", "zh-CN": "是否重置本次选择？" };
    data["nopath"] = { "ko-KR": "경로 없음!", "ja-JP": "", "zh-TW": "無路徑！", "en-US": "No path!", "zh-CN": "无路径！" };
    data["confirmuncheck"] = { "ko-KR": "해당 룬을 체크해제 하시겠습니까?", "ja-JP": "", "zh-TW": "是否取消選中該符文？", "en-US": "Confirm uncheck this rune?", "zh-CN": "是否取消选中该符文？" };

    var getText = function (key) {
        if (!data[key]) {
            console.log("ui language data missing:" + key);
            return key;
        }
        return data[key][getLang()] || data[key]['en-US'];
    };
    var getLang = function () {
        if (!currentLang) {
            setLang();
        }
        return currentLang;
    };
    var setLang = function (lang) {
        lang = lang || localStorage["uilang"] || navigator.language || navigator.browserLanguage;
        if (_.any(supportedLang, function (o) { return o.key == lang }) == false) {
            lang = 'ko-KR';
        }
        currentLang = lang;
        localStorage["uilang"] = lang;
        $('#currentLang').text(_.find(supportedLang, function (o) {
            return o.key == lang;
        }).text);
    };
    var EquipEffect = {
		"ko-KR": {
            Atk: "공격력",
            Def: "방어력",
            MAtk: "마공",
            MDef: "마방",
            MaxHp: "최대체력",
            MaxHpPer: "최대체력(%)",
            Str: "힘",
            Int: "인트",
            Vit: "바이탈",
            Agi: "어질",
            Dex: "덱스",
            Luk: "럭",
            AtkPer: "物攻百分比",
            DefPer: "物防百分比",
            MAtkPer: "魔攻百分比",
            MDefPer: "魔防百分比",
            Hit: "명중",
            Flee: "회피",
            Cri: "크리",
            CriRes: "暴击防护",
            AtkSpd: "공격속도",
            MoveSpd: "이동속도",
            CastSpd: "캐스팅속도",
            Refine: "精炼物攻",
            MRefine: "精炼魔攻",
            DamIncrease: "物伤加成",
            MDamIncrease: "魔伤加成",
            DamReduc: "物伤减免",
            MDamReduc: "魔伤减免",
            RefineDamReduc: "精炼物免",
            RefineMDamReduc: "精炼魔免",
        },
        "zh-CN": {
            Atk: "物理攻击",
            Def: "物理防御",
            MAtk: "魔法攻击",
            MDef: "魔法防御",
            MaxHp: "最大生命值",
            MaxHpPer: "最大生命值%",
            Str: "力量",
            Int: "智力",
            Vit: "体质",
            Agi: "敏捷",
            Dex: "灵巧",
            Luk: "幸运",
            AtkPer: "物攻百分比",
            DefPer: "物防百分比",
            MAtkPer: "魔攻百分比",
            MDefPer: "魔防百分比",
            Hit: "命中",
            Flee: "闪避",
            Cri: "暴击",
            CriRes: "暴击防护",
            AtkSpd: "攻击速度",
            MoveSpd: "移动速度",
            CastSpd: "吟唱速度",
            Refine: "精炼物攻",
            MRefine: "精炼魔攻",
            DamIncrease: "物伤加成",
            MDamIncrease: "魔伤加成",
            DamReduc: "物伤减免",
            MDamReduc: "魔伤减免",
            RefineDamReduc: "精炼物免",
            RefineMDamReduc: "精炼魔免",
        },
        "zh-TW": {
            Atk: "物理攻擊",
            Def: "物理防禦",
            MAtk: "魔法攻擊",
            MDef: "魔法防禦",
            MaxHp: "最大生命值",
            MaxHpPer: "最大生命值%",
            Str: "力量",
            Int: "智力",
            Vit: "體質",
            Agi: "敏捷",
            Dex: "靈巧",
            Luk: "幸運",
            AtkPer: "物攻百分比",
            DefPer: "物防百分比",
            MAtkPer: "魔攻百分比",
            MDefPer: "魔防百分比",
            Hit: "命中",
            Flee: "閃避",
            Cri: "暴擊",
            CriRes: "暴擊防護",
            AtkSpd: "攻擊速度",
            MoveSpd: "移動速度",
            CastSpd: "吟唱速度",
            Refine: "精煉物攻",
            MRefine: "精煉魔攻",
            DamIncrease: "物傷加成",
            MDamIncrease: "魔傷加成",
            DamReduc: "物傷減免",
            MDamReduc: "魔傷減免",
            RefineDamReduc: "精煉物免",
            RefineMDamReduc: "精煉魔免",
        }
    }
    var getEquipEffect = function (key) {
        if (!EquipEffect[getLang()]) {
            return key;
        }
        return EquipEffect[getLang()][key] || key;
    };
    return {
        supportedLang: supportedLang,
        getText: getText,
        getLang: getLang,
        setLang: setLang,
        getEquipEffect: getEquipEffect,
    };
});