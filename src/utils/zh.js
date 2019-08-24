export default {
  newWallet: {
    createWallet: "创建新钱包",
    enterPass1: "请输入钱包密码",
    enterPass2: "请再次输入钱包密码",
    saveKeyStore: "保存Keystore文件",
    keyStoreDown: "Keystore文件下载",
    createBtn: '创建新钱包',
    createBtns: '创建中...',
    next: "继续",
    savePrivateKey: "保存私钥",

    codeIpt: "请输入邀请码",
    codeIptError: "请输入正确的邀请码",
  },
  tipsListPass: {
    "tipsCnt1": "请确保密码强度",
    "tipsCnt2": "密码首尾不可包含空格",
    "tipsCnt3": "下载文件包含您的钱包信息，不要与其他人分享，否则您的钱会被偷走"
  },
  tipsListKey: {
    "tipsCnt1": "不要丢失！如果丢失，将无法恢复",
    "tipsCnt2": "不要分享它！如果您在恶意/钓鱼网站上使用此文件，您的资金将被盗用",
    "tipsCnt3": "备份！保护它就像哪天它有可能值数百万美元"
  },
  passTips: {
    passFormat:"请输入8-30位密码，密码必须包含字母、数字和特殊字符至少两种",
    passNoMatch: "密码输入不一致，请重试",
    passFormatError: "密码格式不正确，请重新输入",
    passEncryption: "你的钱包是加密的！请输入密码",
    newWalletPass: "请输入新钱包密码",
    passError: "密码错误, 解锁失败",
    inviteCodeError: "钱包地址无效"
  },
  walletInfo: {
    accessWallet: "如何访问钱包？",
    privateKey: "私钥",
    invalidPrivateKey: "无效私钥",
    checkKeyStore1: "选择Keystore文件",
    checkKeyStore2: "选择Keystore",
    unlock: "解锁",
    
    unlockBtn: '解锁',
    unlockBtns: '解锁中...',
    inputPrivateKey1: "输入钱包私钥",
    inputPrivateKey2: "请输入钱包私钥",
    walletAddress: "地址",
    walletPrivateKey: "私钥",
    walletMoney: "余额",
    qrCode: "我的地址（二维码）",
    newKeyStore: "下载新的Keystore",

    myCodeTxt: '我的邀请码',
    shareBtn: '一键分享',
  },
  transfer: {
    youAddress: "我的地址",
    transferAdddress: "转账地址",
    transferNumber: "转账数量",
    balance: "可用",
    all: "全部",
    generateTrading: "生成交易",
    confirmTransferInfo: "请确认您的转帐信息",
    orderInfo: "订单信息",
    transferTxt: "转账",
    collectionAddress: "收款地址",
    paymentAddress: "付款地址",
    transferAomunt: "金额",
    transferMoneyError: "请输入正确的转账金额",
    transferMoney: "转账金额必须小于余额",
    transferMoney1: "转账金额不能为0",
    transferMoneyN: "转账手续费必须小于余额",
    transferMoneyN1: "手续费不能为0",
    transferAddressError: "转账地址无效",
    transferAddressError2: "相同地址不能转账",
    transferError: '转账失败，请稍后重试...',
    transferPoundage: '手续费',
    transferPoundage1: '手续费',
    transferFast: '快',
    transferSlow: '慢',
  },
  mapping: {
    ethaddress: 'ETH地址',
    ethwalletddress: 'ETH钱包地址',
    mappingTipsTxt1: '同一ETH地址请尽量一次性映射完全，一笔交易转账，对应提交一次映射请求；若分多笔交易转账，则需要对应提交多次映射请求。',
    mappingTipsTxt2: '请使用ETH的私钥登录查看BIUT钱包；',
    mappingTipsTxt3: '如有疑问，请查看帮助的映射教程。',
    ethAddressErrorTxt: 'ETH地址无效',
    confirmMapping: '确认以下信息',
    tipTxt: '提示',
    mappingButton: '映射',
    mappingButtonAcitve: '映射中...',
    mappingSuccess: '提交映射成功，请等待1-3个工作日查看新钱包地址中新币映射到账情况，如有任何疑问，请联系BIUT工作人员。',
    mappingFailure1: '提交的hash和eth地址错误，或者您的提交还未在以太网络确认，请稍候再试！',
    mappingFailure2: '您已经提交过了，请不要重复提交！',
    mappingFailure3: '系统错误，请稍后再试！',
    mappingHash: 'ETH交易哈希值',
    mappingHashError: '请输入有效的交易哈希',
    mappingHashTxt: '请输入在ETH上转账的交易哈希值',
  },
  pool: {
    poolBanner: 'BIUT矿池正式上线啦',
    poolLogin: '欢迎登入',
    poolLoginIpt: '请输入钱包私钥',
    poolLoginIptError: '请输入正确的钱包私钥',
    poolInvailidError: '钱包地址无效',
    poolLoginBtn: '登入',

    poolIndexL: '未登入',
    poolIndexE: '退出',
    poolIndexListTit1: '矿池名称',
    poolIndexListTit2: '日产值',
    poolIndexListTxt1: '已加入',
    poolIndexListTxt2: '加入',
    poolIndexIpt: '搜索',
    poolIndexTit1: '矿池',
    poolIndexTitLook: '查看所有矿池',
    poolIndexTit2: '加入矿池',
    poolIndexTit3: '收益记录',

    poolIndexTxt1: '上周收益',
    poolIndexTxt2: '总收益',
    poolIndexTxt3: '加入矿池冻结资产',
    poolIndexTxt4: '账户可用余额',

    poolIndexSearch1: '共找到',
    poolIndexSearch2: '条关于',
    poolIndexSearch3: '矿池的结果',

    poolTabTxt1: '矿池',
    poolTabTxt2: '邀请',
    poolListNull: '无记录',
  },
  invitation: {
    level: '我的等级',
    medal: '金牌',
    rules: '查看规则',

    inListTit: '邀请记录',
    inListSearch: '搜索',
    inListTxt1: '地址',
    inListTxt2: '邀请时间',
    inListTxt3: '已获得奖励（BIUT）',
    inListTxt4: '查看明细',
    inListNull: '无邀请记录',
    inListSearchNull: '无搜索内容',

    inMaskTxt: '每次邀请成功就会奖励BIUT，请注意查收哦',
    inMaskListTxt1: '级别',
    inMaskListTxt2: '人数',

    inMask2ListTxt1: '时间',
    inMask2ListTxt2: '奖励 (BUT)',

    level1: '铜牌合伙人',
    level2: '银牌合伙人',
    level3: '金牌合伙人',
    level4: '超级合伙人',
    level4Txt: '64以上',

    invitationTipsTxt1: '在挖矿页面锁仓BIUT，即可解锁邀请码哦！',
    invitationTipsTxt2: '在挖矿页面锁仓一万个BIUT或者加入矿池，即可进行一键分享哦！'
  },
  mask: {
    tips: "操作成功，点击下方链接查看结果：",
    confirm: "确定",
    confirms: "确定...",
    cancel: "取消",

    poolTips: '提示',
    poolBtn: '我知道了',
    poolTxt: '你已加入矿池哦，无法再加入其它矿池！',
    poolNumber: '锁仓数量',
    poolNumberError: '加入矿池最低数量为 10,000 BIUT',
    poolTxt1: '锁仓的biut会被冻结一年。锁仓数量越多，挖到BIU的收益越高哦！',
    poolBtn1: '确认加入'
  },
  headerNav: {
    "Newallet": "新钱包",
    "ViewWalletInfo": "钱包信息",
    "TransferSEC": "转账",
    "Guide": "帮助",
    "Language": "语言",
    "Mapping": "映射",
    "orePool": '矿池'
  },
  helpTips: {
    helpTipsTxt: '请在电脑上查看相关教程'
  },
  footer: {
    FooterCnt: "有任何问题，请与我们联系。官方邮箱"
  },
  public: {
    available: '可用',
    guarantee: '冻结',
    pageNext: '下一页',
    pagePrev: '上一页',

    pageTotal: '共',
    pageRecord: '条记录',
    pageResults: '条结果',
  },
  share: {
    shareTit1: 'BIUT- PC矿工POW',
    shareTit2: '挖矿邀请码',
    shareTxt1: '用浏览器扫一扫即可查看',
    shareTxt2: '保存图片',
  }
}