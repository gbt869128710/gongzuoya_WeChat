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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
      img:"https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",
      ppt:["https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png","https://static.lagou.com/thumbnail_160x160/i/image/M00/02/D2/Cgp3O1ad2COAJMTCAAAntSNYcpo326.png",],
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
    }]

　　}
