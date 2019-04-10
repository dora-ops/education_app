/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : graduation

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2019-04-10 19:35:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for administrator
-- ----------------------------
DROP TABLE IF EXISTS `administrator`;
CREATE TABLE `administrator` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of administrator
-- ----------------------------
INSERT INTO `administrator` VALUES ('1', 'admin', 'admin', '123123');

-- ----------------------------
-- Table structure for classes
-- ----------------------------
DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `peopleQTY` int(11) DEFAULT NULL,
  `teacher` varchar(255) DEFAULT NULL,
  `progress` int(11) DEFAULT NULL,
  `resource` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classes
-- ----------------------------
INSERT INTO `classes` VALUES ('1', 'classes1', 'course1', '2019-03-02', '2019-03-31', '23', 'teacher1', null, '[13,14]');
INSERT INTO `classes` VALUES ('5', '1234', 'course3', '2019-03-04', '2019-03-26', null, 'teahcer1', null, null);
INSERT INTO `classes` VALUES ('7', '测试1', 'course2', '2019-04-02', '2019-04-23', '12', 'teahcer1', null, '[13,14]');
INSERT INTO `classes` VALUES ('8', '测试3', 'course2', '2019-04-02', '2019-04-30', '10', 'teahcer1', null, '[]');
INSERT INTO `classes` VALUES ('9', '测试2', 'course2', '2019-04-02', '2019-04-16', '12', 'teahcer1', null, '[21]');
INSERT INTO `classes` VALUES ('10', '1234', '测试', '2019-03-04', '2019-03-26', null, 'teahcer1', null, null);
INSERT INTO `classes` VALUES ('11', '测试4', 'course3', '2019-04-09', '2019-04-30', '12', 'teahcer1', null, '[22]');
INSERT INTO `classes` VALUES ('12', '123', 'course3', '2019-04-08', '2019-04-30', '123', 'teahcer1', null, '[23]');
INSERT INTO `classes` VALUES ('13', '班级1', '课程测试', '2019-04-08', '2019-04-30', '34', 'teahcer1', null, '[24]');

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `classQTY` int(11) DEFAULT NULL,
  `ifSale` varchar(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `abstract` varchar(255) DEFAULT NULL,
  `classes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES ('1', 'course1', '0', '0', '580', 'python , 人工智能培训 , 不一样的品质 , 一样的教育 , 增强核心竞争力 , 全程项目驱动教学 , 学习即积累项目经验 , 课程不断更新 , 层层递进 , 多种职业规划', null);
INSERT INTO `courses` VALUES ('2', 'course2', '2', '1', '880', 'python , 人工智能培训 , 不一样的品质 , 一样的教育 , 增强核心竞争力 , 全程项目驱动教学 , 学习即积累项目经验 , 课程不断更新 , 层层递进 , 多种职业规划', '[2,3,7,8,9]');
INSERT INTO `courses` VALUES ('3', 'course3', '3', '1', '980', 'python , 人工智能培训 , 不一样的品质 , 一样的教育 , 增强核心竞争力 , 全程项目驱动教学 , 学习即积累项目经验 , 课程不断更新 , 层层递进 , 多种职业规划', null);
INSERT INTO `courses` VALUES ('4', 'course4', '0', '1', '1080', 'python , 人工智能培训 , 不一样的品质 , 一样的教育 , 增强核心竞争力 , 全程项目驱动教学 , 学习即积累项目经验 , 课程不断更新 , 层层递进 , 多种职业规划', null);
INSERT INTO `courses` VALUES ('7', '测试', '12', '1', '85', '安徽省打开', null);
INSERT INTO `courses` VALUES ('8', '课程测试', '1', '1', '123', '123a', '[13]');

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `ifBuy` varchar(255) DEFAULT NULL,
  `courses` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `classes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES ('9', '测试返回', '15967697177', '1', '[8,2,3,4,7]', '男', null, '123123', '29', '[2,3,7,8,9,10,13]');
INSERT INTO `customers` VALUES ('13', '测试手机', '18072928206', '1', '', '女', null, '123123', null, null);
INSERT INTO `customers` VALUES ('14', '123', '18858965258', '1', '', '男', null, '123123', null, null);
INSERT INTO `customers` VALUES ('15', '测试跳转', '18858965257', '1', '', '女', null, '123123', null, null);
INSERT INTO `customers` VALUES ('17', '测试测试', '18072928205', '1', '', '男', null, '123123', null, null);
INSERT INTO `customers` VALUES ('18', '1745', '15967697178', '0', null, null, null, '145224', null, null);
INSERT INTO `customers` VALUES ('19', '111', '15967697172', '0', null, null, null, '123123', null, null);
INSERT INTO `customers` VALUES ('20', '123', '15967697170', null, null, null, null, '123123', null, null);

-- ----------------------------
-- Table structure for identity
-- ----------------------------
DROP TABLE IF EXISTS `identity`;
CREATE TABLE `identity` (
  `id` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of identity
-- ----------------------------
INSERT INTO `identity` VALUES ('1', 'admin');
INSERT INTO `identity` VALUES ('2', 'sale');
INSERT INTO `identity` VALUES ('3', 'study');

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `uid` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('1', '帖子1', '暗杀回到房间安徽省大家发十九分看阿萨大；开发和速度发哈岁的发啊啊；阿斯蒂芬；的v', '1', '2019-03-26 15:57:30');
INSERT INTO `posts` VALUES ('9', '123', '1234', '2', '2019-04-05 19:28:45');
INSERT INTO `posts` VALUES ('9', '123', '23das123', '3', '2019-04-05 19:50:23');

-- ----------------------------
-- Table structure for resource
-- ----------------------------
DROP TABLE IF EXISTS `resource`;
CREATE TABLE `resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filePath` varchar(255) DEFAULT NULL,
  `fileName` varchar(255) DEFAULT NULL,
  `originalname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of resource
-- ----------------------------
INSERT INTO `resource` VALUES ('13', '1.mp4', '1.mp4', '运动会.mp4');
INSERT INTO `resource` VALUES ('14', 'uploads\\24fc4ae0-5541-11e9-829b-557be22a11f6.jpg', '2.mp4', 'QQ浏览器截图_20180421012224_E4D1588961FC4fa9863E6D865ADCECE5.jpg');
INSERT INTO `resource` VALUES ('15', 'uploads\\2c3f9370-5541-11e9-829b-557be22a11f6.jpg', '2c3f9370-5541-11e9-829b-557be22a11f6.jpg', 'QQ浏览器截图_20180421012253_A612344F75194063BBFE755526C769E4.jpg');
INSERT INTO `resource` VALUES ('16', 'uploads\\81aa2f00-5541-11e9-829b-557be22a11f6.jpg', '81aa2f00-5541-11e9-829b-557be22a11f6.jpg', 'QQ浏览器截图_20180421012224_E4D1588961FC4fa9863E6D865ADCECE5.jpg');
INSERT INTO `resource` VALUES ('17', 'uploads\\c2efc740-5541-11e9-829b-557be22a11f6.jpg', 'c2efc740-5541-11e9-829b-557be22a11f6.jpg', 'QQ浏览器截图_20180421012224_E4D1588961FC4fa9863E6D865ADCECE5.jpg');
INSERT INTO `resource` VALUES ('18', 'uploads\\75b94770-5542-11e9-829b-557be22a11f6.jpg', '75b94770-5542-11e9-829b-557be22a11f6.jpg', 'QQ浏览器截图_20180421012243_FDDE36E0CD834fe192FC5845C8EE17FF.jpg');
INSERT INTO `resource` VALUES ('19', 'uploads\\a76a39f0-5542-11e9-829b-557be22a11f6.jpg', 'a76a39f0-5542-11e9-829b-557be22a11f6.jpg', 'QQ浏览器截图_20180421012224_E4D1588961FC4fa9863E6D865ADCECE5.jpg');
INSERT INTO `resource` VALUES ('20', 'uploads\\d22d2fd0-5542-11e9-829b-557be22a11f6.jpg', 'd22d2fd0-5542-11e9-829b-557be22a11f6.jpg', 'QQ浏览器截图_20180429235258_EDEB3315DC944b28A5A93EBD3BCE652D.jpg');
INSERT INTO `resource` VALUES ('21', 'uploads\\0201e840-5543-11e9-829b-557be22a11f6.jpg', '0201e840-5543-11e9-829b-557be22a11f6.jpg', 'QQ浏览器截图_20180421012224_E4D1588961FC4fa9863E6D865ADCECE5.jpg');
INSERT INTO `resource` VALUES ('22', 'e:\\study\\graduation_design_front_sit\\server\\public\\32305c70-5a04-11e9-a048-391e7f6c6d86.mp4', '32305c70-5a04-11e9-a048-391e7f6c6d86.mp4', '1.mp4');
INSERT INTO `resource` VALUES ('23', 'e:\\study\\graduation_design_front_sit\\server\\public\\82e9ba10-5a06-11e9-a048-391e7f6c6d86.mp4', '82e9ba10-5a06-11e9-a048-391e7f6c6d86.mp4', '1.mp4');
INSERT INTO `resource` VALUES ('24', 'e:\\study\\graduation_design_front_sit\\server\\public\\b6114a30-5a0a-11e9-b2a4-dd8de4599cb4.mp4', 'b6114a30-5a0a-11e9-b2a4-dd8de4599cb4.mp4', '2.mp4');
INSERT INTO `resource` VALUES ('25', 'e:\\study\\graduation_design_front_sit\\server\\public\\272e91f0-5ad8-11e9-848c-2353e896fbbe.jpg', '272e91f0-5ad8-11e9-848c-2353e896fbbe.jpg', 'QQ浏览器截图_20180421012224_E4D1588961FC4fa9863E6D865ADCECE5.jpg');
INSERT INTO `resource` VALUES ('26', 'e:\\study\\graduation_design_front_sit\\server\\public\\9630c620-5ada-11e9-848c-2353e896fbbe.jpg', '9630c620-5ada-11e9-848c-2353e896fbbe.jpg', 'QQ浏览器截图_20180421012243_FDDE36E0CD834fe192FC5845C8EE17FF.jpg');
INSERT INTO `resource` VALUES ('27', 'e:\\study\\graduation_design_front_sit\\server\\public\\b271bec0-5ada-11e9-848c-2353e896fbbe.jpg', 'b271bec0-5ada-11e9-848c-2353e896fbbe.jpg', 'QQ浏览器截图_20180421012243_FDDE36E0CD834fe192FC5845C8EE17FF.jpg');
INSERT INTO `resource` VALUES ('28', 'e:\\study\\graduation_design_front_sit\\server\\public\\c7ee14b0-5ada-11e9-848c-2353e896fbbe.jpg', 'c7ee14b0-5ada-11e9-848c-2353e896fbbe.jpg', 'QQ浏览器截图_20180421012253_A612344F75194063BBFE755526C769E4.jpg');
INSERT INTO `resource` VALUES ('29', 'e:\\study\\graduation_design_front_sit\\server\\public\\cac24350-5ada-11e9-848c-2353e896fbbe.jpg', 'cac24350-5ada-11e9-848c-2353e896fbbe.jpg', 'QQ浏览器截图_20180430100646_0AF72E54AADE4a92AC2EFCFFBF6220C1.jpg');
