const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
//正则判断


　　function Regular(str, reg) {

　　if (reg.test(str))

　　return true;

　　return false;

　　}

　　//是否为中文

　　function IsChinese(str) {

　　var reg = /^[u0391-uFFE5]+$/;

　　return Regular(str, reg);

　　}

　　module.exports = {

// 　　  getRequestUrl: "http://localhost:59637",//获得接口地址

　　  firm:[{
      id:0,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动1",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:1,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:2,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:3,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:4,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:5,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:6,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:7,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:8,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:9,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:10,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:11,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:12,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    },{
      id:13,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
      code:["../../images/logo3.png"],
      name:"悦然心动",
      hot: 0,
      city:"武汉",
      msg:"移动互联网,社交网络",
      namber:"110",
      nature:"成熟企业",
      people:"100-500人",
      praise:0,
      message:["诺嘉国际是来自香港的著名按摩器材品牌，全球注册品牌为Rocago。自成立以来，Rocago一直秉承“爱健康 更爱父母”的品牌理念和“成为消费者最喜爱、创业伙伴最满意的国际化健康产业平台！”的企业愿景，专注于智能健康医疗行业，与中国科学院微电子研究所共建“智能健康技术联合实验室”为全球消费者提供最专业、最优质的产品和服务。如今，Rocago已被认定为“国家高新技术企业”、“中国绿色健康器材示范企业”、“ISO9001认证企业”、“3C认证企业”、“热心慈善公益机构”、2016年“中国按摩器材十大品牌企业”、“十大房地产公司碧桂园”按摩器材指定供应商，同时是“中国医疗保健国际交流促进会健康产业专业委员会”、“预防医学与健康器材器械工程研究中心”会员单位及行业标准制定单位；在全球拥有60多家分公司，线下体验中心、品牌专卖店近300个，研发出近百种适用于人体不同部位的按摩产品。Rocago用心呵护健康，用爱传递理念，用时尚引领潮流，良好的品牌形象和卓越的产品服务为诺嘉赢得了消费者的青睐，成为千万家庭的选择。",
      "Rocago已经进驻香港、中国大陆、台湾、马来西亚的各大商场，以及eBay、亚马逊、阿里巴巴、天猫、京东等国内外知名网络销售平台，与雅虎香港拍卖、香港亚洲展览有限公司、香港贸易发展局、香港工会联合会及多所研究机构等展开不同形式的战略合作。 Rocago将一如既往本着“成为消费者最喜爱、全球伙伴最满意并具有中国特色的品牌”的愿景，不断研发更多款式新颖、品质保障的产品，全心全意“让老百姓想舒服起来”，打造中国百年品牌！",
      "南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"],
      land:[{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      },{
        site:"南京市鼓楼区",
        site_city:"赛城国际大厦",
        site_land:[118.778313,32.074152]
      }]

    }],







    job:[{
      id:0,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动1",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26",
      jobs:"实习生",
      tempt:["带薪年假","定期体检","节日礼物"],
      describe:["前端","web","网站开发","web前端","php","HTML"],
      duty:["1、通过网络工具寻找意向客户，并形成有效邀约；","2、通过电话工具寻找、维护、再开发新老客户，协助销售团队达成成交；","3、意向客户均有销售团队咨询接待；","4、新同事公司均会安排专业培训，有无经验均可！"],
      condition:["1、男女不限，地区不限，年龄20岁以上；","2、专科及以上学历，工作年限无要求；","3、沟通交流能力良好，普通话不要求多么标准，正常人能听明白即可；","4、热爱生活，热爱生命，对明天充满期待，对昨天充满感恩；","5、知道自己想要什么，知道自己要去哪里，知道自己是谁。","6、有php或jsp相关经验的优先","7、工作地点在南京者优先"],
      priority:["1、底薪 奖金 提成...3500 （一直想说工资多少真的完全您自己）","2、双休","3、不加班（如果正常上班时间您在休息了话，那么...）","4、能者上，庸者退（是骡子，是马，遛遛...）","5、先要证明自己可以让公司录用你。（然后你会感受到什么是爱和阳光...）"],
    }, {
      id:1,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:2,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:3,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:4,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:5,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:6,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:7,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:8,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:9,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:10,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:11,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:12,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }, {
      id:13,
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      job:"web前端工程师",
      money: "10k-20k",
      name:"悦然心动",
      city: "武汉",
      site: "安德门",
      time:"1-3年",
      record:"本科",
      issue:"10:26"
    }],


    interview:[{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。南京诺施智能科技有限公司是Rocago南京地区的品牌运营公司，为了更好地完成Rocago集团的人才战略目标，特聘一批健康、时尚、活力、青春的有志之士。"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    },{
      img:"http://nanjing.gongzuoya.com/./data/upload/company/20160907/1473228509469_1.PNG",
      five:[0,0,0,0,0],
      name:"张国荣",
      job:"web前端工程师",
      time:"09月04日",
      list:["大公司","面试官很nice",],
      evaluate:"面试评价"
    }],




// ego:["乐观向上","兴趣广泛","为人诚恳","积极进取","适应力强","勤奋好学","脚踏实地","上手快","认真负责","坚毅不拔","吃苦耐劳","勇于挑战","热情开朗","待人友好","诚实谦虚","工作勤奋","尽职尽责","亲和力强","善于与人沟通","逻辑清晰","处事果断"],
// skill:["智能硬件","模具设计","php"],
my:[{
    id:0,
    name:"名字",
    city: ['北京', '上海', '广州', '深圳', '南京', '杭州', '宁波', '苏州', '成都', '天津', '厦门', '重庆', '武汉', '全国',],
    record:['专科','本科','硕士','博士'],
    time:"实习生",
    sex:["男","女"],
    age:"25岁",
    referral:"我是一个牛逼的人，低调奢华有内涵我是一个牛逼的人，低调奢华有内涵",
    email:"463482075@qq.com",
    phone:"15626572657",
    now:['等待实习', '已实习想要更好的', '努力找工作ing'],
    trade:"互联网",
    job:"Java",
    job_city: ['北京', '上海', '广州', '深圳', '南京', '杭州', '宁波', '苏州', '成都', '天津', '厦门', '重庆', '武汉', '全国',],
    money: "10k-20k",
    education:[{
      school:"南京大学",
      academy:"985高校",
      graduate:"2017-05",
      major:"税收学",
      campus:"学生会主席"
    }],
    work:[{
      firm:"笃信教育",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"
    }],
    ego_:["乐观向上","兴趣广泛","为人诚恳"],
    skill_:["智能硬件","模具设计","php","英语","产品经理"],
    project:[{
      firm:"工作呀",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"
    }],
    cultivate:[{
      firm:"工作呀就业指导中心",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"人际是社会上人与人之间的交际和交往的总称； 人际关系是一种耐以生存的基本能力； 人际关系是社会活动中人与人之间沟通，因社会关系形成复杂，而产生各种问题； 人际关系属于社会学范畴之内的人类社会活动实践方向。"
    }],
    grasp:["熟练","良好","一般"],
    works:[{
      firm:"工作呀",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",]
    }],
  },{
    id:1,
    name:"名字1",
    city: ['北京', '上海', '广州', '深圳', '南京', '杭州', '宁波', '苏州', '成都', '天津', '厦门', '重庆', '武汉', '全国',],
    record:['专科','本科','硕士','博士'],
    time:['实习生','应届生','往届生','无要求'],
    sex:["男","女"],
    age:"25岁",
    referral:"我是一个牛逼的人，低调奢华有内涵我是一个牛逼的人，低调奢华有内涵",
    email:"463482075@qq.com",
    phone:"15850565887",
    now:['等待实习', '已实习想要更好的', '努力找工作ing'],
    trade:"互联网",
    job:"Java",
    job_city: ['北京', '上海', '广州', '深圳', '南京', '杭州', '宁波', '苏州', '成都', '天津', '厦门', '重庆', '武汉', '全国',],
    money: "10k-20k",
    education:[{
      school:"南京大学",
      academy:"985高校",
      graduate:"2017-05",
      major:"税收学",
      campus:"学生会主席"
    }],
    work:[{
      firm:"笃信教育",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"
    }],
    ego_:["乐观向上","兴趣广泛","为人诚恳"],
    skill_:["智能硬件","模具设计","php","英语","产品经理"],
    project:[{
      firm:"工作呀",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"
    }],
    cultivate:[{
      firm:"工作呀就业指导中心",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"人际是社会上人与人之间的交际和交往的总称； 人际关系是一种耐以生存的基本能力； 人际关系是社会活动中人与人之间沟通，因社会关系形成复杂，而产生各种问题； 人际关系属于社会学范畴之内的人类社会活动实践方向。"
    }],
    grasp:["熟练","良好","一般"],
    works:[{
      firm:"工作呀",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",]
    }],
  },{
    id:3,
    name:"名字1",
    city: ['北京', '上海', '广州', '深圳', '南京', '杭州', '宁波', '苏州', '成都', '天津', '厦门', '重庆', '武汉', '全国',],
    record:['专科','本科','硕士','博士'],
    time:['实习生','应届生','往届生','无要求'],
    sex:["男","女"],
    age:"25岁",
    referral:"我是一个牛逼的人，低调奢华有内涵我是一个牛逼的人，低调奢华有内涵",
    email:"463482075@qq.com",
    phone:"13813804740",
    now:['等待实习', '已实习想要更好的', '努力找工作ing'],
    trade:"互联网",
    job:"Java",
    job_city: ['北京', '上海', '广州', '深圳', '南京', '杭州', '宁波', '苏州', '成都', '天津', '厦门', '重庆', '武汉', '全国',],
    money: "10k-20k",
    education:[{
      school:"南京大学",
      academy:"985高校",
      graduate:"2017-05",
      major:"税收学",
      campus:"学生会主席"
    }],
    work:[{
      firm:"笃信教育",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"
    }],
    ego_:["乐观向上","兴趣广泛","为人诚恳"],
    skill_:["智能硬件","模具设计","php","英语","产品经理"],
    project:[{
      firm:"工作呀",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"
    }],
    cultivate:[{
      firm:"工作呀就业指导中心",
      job:"web前端工程师",
      section:"技术部",
      start:"2016-05",
      over:"2017-05",
      content:"人际是社会上人与人之间的交际和交往的总称； 人际关系是一种耐以生存的基本能力； 人际关系是社会活动中人与人之间沟通，因社会关系形成复杂，而产生各种问题； 人际关系属于社会学范畴之内的人类社会活动实践方向。"
    }],
    grasp:["熟练","良好","一般"],
    works:[{
      firm:"工作呀",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",]
    }],
  }]
}
