const prayers = [
  {
    id: 1,
    title:"دعاء ليلة القدر",
    text: "اللهم إنّك عفوٌ كريمٌ تحب العفو فاعف عني",
    description: "هذا الدعاء علمه النبي ﷺ للسيدة عائشة رضي الله عنها عندما سألته: ما أقول في ليلة القدر؟",
    virtues: "من أجمل وأكمل ما يُدعى به في ليلة القدر، يجمع بين الثناء على الله تعالى وطلب العفو منه سبحانه"
  },
  {
    id: 2,
    title:"",
    text: "اللَّهمَّ لَكَ الحمدُ أنتَ نورُ السَّمَواتِ والأرضِ ومَن فيهنَّ، ولَكَ الحمدُ أنتَ قيِّمُ السَّماواتِ والأرضِ ومَن فيهنَّ، ولَكَ الحمدُ أنتَ ملِكُ السَّمَواتِ والأرضِ ومَن فيهنَّ، لَكَ الحمدُ أنتَ الحقُّ، ولقاؤُكَ حقٌّ، ووعيدُكَ حقٌّ، وعذابُ القبرِ حقٌّ، والجنَّةُ حقٌّ، والنَّارُ حقٌّ، والسَّاعةُ حقٌّ، والقبر حقٌّ، ومحمَّدٌ حقٌّ",
    description: "",
    virtues: ""
  },
  {
    id: 3,
    title:"",
    text: "اللَّهمَّ بِكَ آمنتُ، ولَكَ أسلمتُ، وعليكَ توَكَّلتُ، وإليكَ أنبتُ، وبِكَ خاصَمتُ، وإليكَ حاكَمتُ، فاغفرْ لي ما قدَّمتُ وما أخَّرتُ، وما أسرَرتُ وما أعلَنتُ، أنتَ المقدِّمُ، وأنتَ المؤخِّرُ، لا إلَهَ إلَّا أنتَ، ولا إلَهَ غيرُكَ",
    description: "",
    virtues: ""
  },
  {
    id: 4,
    title:"",
    text: "اللهمَّ إنا نعوذُ برضاك من سخطِك، وبعفوِك من عقوبتِك، وبِك مِنك لا نُحصي ثناءً عليك، أنت كما أثنَيت على نفسِك",
    description: "",
    virtues: ""
  },
  {
    id: 5,
    title:"",
    text: "اللهم لا تجعل مُصيبتنا في ديننا، ولا تجعل الدنيا أكبر همِّنا ولا مبلغ علمنا، ولا تسلّط علينا مَن لا يرحمنا.",
    description: "",
    virtues: ""
  },
  {
    id: 6,
    title:"",
    text: "اللهم ما قسمت في هذه الليلة مِن علمٍ ورزقٍ وأجرٍ وعافية فاجعل لنا منه أوفر الحظ والنصيب.",
    description: "",
    virtues: ""
  },
  {
    id: 7,
    title:"",
    text: "اللهم إنا نسألك من خير ما سألك منه عبدك ورسولك سيدنا محمد -صلى الله عليه وسلم-، ونستعيذك من شر ما استعاذك منه عبدك ورسولك سيدنا محمد -صلى الله عليه وسلم",
    description: "",
    virtues: ""
  },
  {
    id: 8,
    title:"",
    text: "اللهم إنّا نسألك برحمتك التي وسعت كل شيء أن تغفر لنا ذنوبنا، وأن تكفّر عنا سيئاتنا وأن تتولى أمرنا.",
    description: "",
    virtues: ""
  },
  {
    id: 9,
    title:"",
    text: "اللهم إنّا نسألك أن ترفع ذكرنا، وتضع وزرنا، وتطهر قلوبنا، وتحصن فروجنا، وتغفر لنا ذنوبنا.",
    description: "",
    virtues: ""
  },
  {
    id: 10,
    title:"",
    text: "اللهم ثبتنا بالقول الثابت في الحياة الدنيا وفي الآخرة.",
    description: "",
    virtues: ""
  },
  {
    id: 11,
    title:"",
    text: "اللهم إن كانت هذه ليلة القدر فاقسم لي فيها خير ما قسمت، واختم لي في قضائك خير مما ختمت.",
    description: "",
    virtues: ""
  },
  {
    id: 12,
    title:"",
    text: "اللهم افتح لي الليلة باب كل خير فتحته لأحد من خلقك وأوليائك وأهل طاعتك، ولا تسده عني، اللهم ارزقني رزقاً تغيثني به مِن رزقك الطيب الحلال.",
    description: "",
    virtues: ""
  },
  {
    id: 13,
    title:"",
    text: "اللهم ما قسمت في هذه الليلة المباركة مِن خير وعافية وصحة وسلامة وسعة رزق فاجعل لي منه نصيب، وما أنزلت فيها مِن سوء وبلاء وشر وفتنة فاصرفه عني وعن جميع المسلمين.",
    description: "",
    virtues: ""
  },
  {
    id: 14,
    title:"",
    text: "اللهم ما كان فيها مِن ذكر وشكر فتقبّله مني وأحسن قبوله، وما كان مِن تفريطٍ وتقصيرٍ وتضييعٍ فتجاوز عني بسعة رحمتك يا أرحم الراحمين.",
    description: "",
    virtues: ""
  },
  {
    id: 15,
    title:"",
    text: "اللهم تغمّدني فيها بسابغ كرمك، واجعلني فيها مِن أوليائك، واجعلها لي خيراً مِن ألف شهر مع عظيم الأجر وكريم الذخر.",
    description: "",
    virtues: ""
  },
  {
    id: 16,
    title:"",
    text: "اللهم اغفر لي، ولا تصرفني مِن هذه الليله إلّا بذنبٍ مغفور، وسعي مَشكور، وعمل متقبّل مبرور، وتجارة لن تبور، وشفاء لما في الصدور، وتوبة خالصة لوجهك الكريم.",
    description: "",
    virtues: ""
  },
  {
    id: 17,
    title:"",
    text: "اللهم اجعلني في هذه الليلة ممن نظرت إليه فرحمته، وسمعت دعاءه فأجبته.",
    description: "",
    virtues: ""
  },
  {
    id: 18,
    title:"",
    text: "اللهم أسالك في ليلة القدر وأسرارها وأنوارها وبركاتها أن تتقبل ما دعوتك به، وأن تقضي حاجتي يا أرحم الرحمين.",
    description: "",
    virtues: ""
  },
  {
    id: 19,
    title:"",
    text: "اللهم اجعلنا في هذه الليلة من الذين نظرت إليهم وغفرت لهم ورضيت عنهم.",
    description: "",
    virtues: ""
  },
  {
    id: 20,
    title:"",
    text: "اللهم اجعلنا في هذه الليلة من الذين تسلّم عليهم الملائكة.",
    description: "",
    virtues: ""
  },
  {
    id: 21,
    title:"",
    text: "اللهم اجعل دعائنا خالصاً لوجهك الكريم.",
    description: "",
    virtues: ""
  },
  {
    id: 22,
    title:"",
    text: "اللهم اجعل خير أيامنا يوم لقاك",
    description: "",
    virtues: ""
  },
  {
    id: 23,
    title:"",
    text: "اللهم اجعلنا ممن تعتق رقابهم في رمضان.",
    description: "",
    virtues: ""
  },
  {
    id: 24,
    title:"",
    text: "اللهم تقبل منا صلاتنا وصيامنا وقيامنا، واجعلنا من عتقائك.",
    description: "",
    virtues: ""
  },
  {
    id: 25,
    title:"",
    text: "اللهم اغفر لنا أنتَ الغفور الرحيم، يا غفور يا رحيم يا الله أعتق رقابنا ورقاب آبائنا من النار.",
    description: "",
    virtues: ""
  },
  {
    id: 26,
    title:"",
    text: "اللهم اجعلني وأهلي وذريّتي والمسلمين جميعاً فيها مِن عتقائك من جهنم وطلقائك مِن النار.",
    description: "",
    virtues: ""
  },
  {
    id: 27,
    title:"",
    text: "اللهم تقبل منا ليلة القدر والعشر الآواخر مِن شهرك الفضيل المبارك، واجعلنا ممن أعتقت رقابهم من النار يا أرحم الراحمين.",
    description: "",
    virtues: ""
  },
  {
    id: 28,
    title:"",
    text: "اللَّهُمَّ أَصْلِحْ لي دِينِي الذي هو عِصْمَةُ أَمْرِي، وَأَصْلِحْ لي دُنْيَايَ الَّتي فِيهَا معاشِي، وَأَصْلِحْ لي آخِرَتي الَّتي فِيهَا معادِي، وَاجْعَلِ الحَيَاةَ زِيَادَةً لي في كُلِّ خَيْرٍ، وَاجْعَلِ المَوْتَ رَاحَةً لي مِن كُلِّ شَرٍّ).",
    description: "",
    virtues: ""
  },
  {
    id: 29,
    title:"",
    text: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَن زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا، اللَّهُمَّ إنِّي أَعُوذُ بكَ مِن عِلْمٍ لا يَنْفَعُ، وَمِنْ قَلْبٍ لا يَخْشَعُ، وَمِنْ نَفْسٍ لا تَشْبَعُ، وَمِنْ دَعْوَةٍ لا يُسْتَجَابُ لَهَا",
    description: "",
    virtues: ""
  },
  {
    id: 30,
    title:"",
    text: "اللهم ارزقنا عملاً صالحاً يقرّبنا إلى رحمتك، ولساناً ذاكراً شاكراً لنعمتك.",
    description: "",
    virtues: ""
  },
    {
    id: 31,
    title:"",
    text: "اللهم ثبتنا بالقول الثابت في الحياة الدنيا وفي الآخرة.",
    description: "",
    virtues: ""
  },
  {
    id: 32,
    title:"",
    text: "اللهم إنّي أسألك صدق التوكل عليك وحسن الظن بك.",
    description: "",
    virtues: ""
  },
  {
    id: 33,
    title:"",
    text: "اللهم ارزقنا قلوباً سليمة ونفوساً مطمئنة.",
    description: "",
    virtues: ""
  },
  {
    id: 34,
    title:"",
    text: "اللهم أعنّي على طاعتك والقيام بما تحبّه وترضاه على الوجه الذي يرضيك عنا.",
    description: "",
    virtues: ""
  },
  {
    id: 35,
    title:"",
    text: "اللهم لا تشغلني عنك وقرّبني إليك.",
    description: "",
    virtues: ""
  },
  {
    id: 36,
    title:"",
    text: "اللهم اقسم لنا مِن خشيتك ما تحول به بيننا وبين معصيتك، ومن طاعتك ما تبلغنا به جنتك، ومن اليقين ما تهون به علينا مصائب الدنيا.",
    description: "",
    virtues: ""
  },
  {
    id: 37,
    title:"",
    text: "اللهم متعنا بصحتنا وأسماعنا وأبصارنا وقواتنا ما أحييتنا، واجعله الوارث منا، وانصرنا على مَن عادانا.",
    description: "",
    virtues: ""
  },
  {
    id: 38,
    title:"",
    text: "اللهم ارزقني فضل قيام ليلة القدر، وسهّل أموري فيها مِن العسر إلى اليسر، واقبل معاذيري، وحطّ عني الذنب والوزر يا رؤوفاً بعباده الصالحين.",
    description: "",
    virtues: ""
  },
  {
    id: 39,
    title:"",
    text: "اللهم اجعلنا من الذين يقولون فيعلمون، ويعلمون فيخلصون، ويخلصون فيقبلون، ويقبلون فينعمون برحمتك يا أرحم الراحمين.",
    description: "",
    virtues: ""
  },
  {
    id: 40,
    title:"",
    text: "اللهم اكتب لنا حج بيتك الحرام وزيارة النبي -عليه الصلاة والسلام-.",
    description: "",
    virtues: ""
  },
  {
    id: 41,
    title:"",
    text: "اللهم أصلح لنا ديننا الذي هو عِصمة أمرنا وأصلح لنا دنيانا التي فيها معاشنا، وأصلح لنا آخرتنا التي فيها معادنا.",
    description: "",
    virtues: ""
  },
  {
    id: 42,
    title:"",
    text: "اللهم اجعل الحياة زيادة لنا في كل خير، واجعل الموت راحة لنا من كل شر.",
    description: "",
    virtues: ""
  },
   {
    id: 43,
    title:"",
    text: "اللهم ارزقنا عملاً صالحاً يقربنا إلى رحمتك، ولساناً ذاكراً شاكراً لنعمتك.",
    description: "",
    virtues: ""
  },
  {
    id: 44,
    title:"",
    text: "اللهم إنّا نسألك حبك، وحب من يحبك، وحب العمل الذي يقربنا إلى حبك.",
    description: "",
    virtues: ""
  },
  {
    id: 45,
    title:"",
    text: "اللهم إنا نسألك الدرجات العلا من الجنة.",
    description: "",
    virtues: ""
  },
  {
    id: 46,
    title:"",
    text: "اللهم اختم لنا بخير، واجعل عواقب أمورنا إلى خير يا أرحم الراحمين يا كريم.",
    description: "",
    virtues: ""
  },
  {
    id: 47,
    title:"",
    text: "اللهم اختم بالباقيات الصالحات أعمالنا، يا مفرج الكروب فرّج كربنا، واغفر ذنبنا واستر عيبنا، وأدخلنا برحمتك في عبادك الصالحين.",
    description: "",
    virtues: ""
  },
  {
    id: 48,
    title:"",
    text: "اللهم اجعلنا من عبادك السعداء ووفقنا لأفضل الأعمال.",
    description: "",
    virtues: ""
  },
  {
    id: 49,
    title:"",
    text: "اللهم إنّا نسألك العفو والعافية والمعافاة الدائمة في الدين والدنيا والآخرة.",
    description: "",
    virtues: ""
  },
  {
    id: 50,
    title:"",
    text: "يا رب ارزق أمُي وأبي فرحاً لا ينتهي وسعادةً تنسِيهِم همومَ الدُنيا ومشاكلها.",
    description: "",
    virtues: ""
  },
   {
    id: 51,
    title:"",
    text: "اللهم ارزق والدي صحةً في البدن وراحةً في القلب وَصفاءً في الذهن.",
    description: "",
    virtues: ""
  },
  {
    id: 52,
    title:"",
    text: "اللهم اغفر لي ولوالدي ولمن أحسن إلّي.",
    description: "",
    virtues: ""
  },
  {
    id: 53,
    title:"",
    text: "اللهم سهّل لوالديّ كل عسير وأرنا في حياتنا ما يسرنا ويرضيك.",
    description: "",
    virtues: ""
  },
  {
    id: 54,
    title:"",
    text: "اللهم أسكن والديّ الفردوس بجوار نبيك الكريم",
    description: "",
    virtues: ""
  },
  {
    id: 55,
    title:"",
    text: "إلهي ربح الصائمون، وفاز القائمون، ونجا المخلصون، ونحن عبيدك المذنبون، فارحمنا برحمتك وجد علينا بفضلك ومنّتك واغفر لنا أجمعين برحمتك يا أرحم الراحمين.",
    description: "",
    virtues: ""
  },
  {
    id: 56,
    title:"",
    text: "إلهي وقف السائلون ببابك، ولاذ الفقراء بجنابك، ووقفت سفينة المساكين على ساحل كرمك، يرجون الجواز إلى ساحة رحمتك ونعمتك.",
    description: "",
    virtues: ""
  },
  {
    id: 57,
    title:"",
    text: "اللهم لا تجعلنا فى شهرنا هذا من أهل التفريط والإضاعة، وآمنا من خوفنا يوم تقوم الساعه برحمتك يا أرحم الراحمين.",
    description: "",
    virtues: ""
  },
  {
    id: 58,
    title:"",
    text: "اللهم لك الحمد كما هديتنا للإسلام، وعلمتنا الحكمة والقران، اللهم اجعلنا لكتابك مِن التالين، ولك به مِن العاملين، وبالأعمال مخلصين وبالقسط قائمين، وعن النار مزحزحين، وبالجنات منعمين وإلى وجهك ناظرين.",
    description: "",
    virtues: ""
  },
  {
    id: 59,
    title:"",
    text: "اللهم اجعلنا بتلاوة كتابك منتفعين، وعند ختمه من الفائزين.",
    description: "",
    virtues: ""
  },
  {
    id: 60,
    title:"",
    text: "نسألك اللهم بكل اسمٍ هو لك، سمّيت به نفسك، أو أنزلته فى كتابك، أو علّمته أحداً مِن خلقك، أو استأثرت به في علم الغيب عندك، أن تجعل القرآن الكريم ربيع قلوبنا، ونور أبصارنا، وشفاء صدورنا و جلاء أحزاننا، وذهاب همومنا وغمومنا.",
    description: "",
    virtues: ""
  },
  {
    id: 61,
    title:"",
    text: "اللهم اجعل القرآن دليلنا إليك وإلى جناتك جنات النعيم برحمتك يا أرحم الراحمين.",
    description: "",
    virtues: ""
  },
  {
    id: 62,
    title:"",
    text: "اللهم أحينا مستورين، وأمتنا مستورين، وابعثنا مستورين، وأكرمنا بلقائك مستورين.",
    description: "",
    virtues: ""
  },
  {
    id: 63,
    title:"",
    text: "اللهم استرنا فوق الأرض، واسترنا تحت الأرض، واسترنا يوم العرض.",
    description: "",
    virtues: ""
  },
  {
    id: 64,
    title:"",
    text: "اللهم اشفِ مرضانا ومرضى المسلمين، وارحم موتانا وموتى المسلمين.",
    description: "",
    virtues: ""
  },
  {
    id: 65,
    title:"",
    text: "اللهم اقضِ حوائجنا وحوائج السائلين.",
    description: "",
    virtues: ""
  },
  {
    id: 66,
    title:"",
    text: "اللهم تولّ أمورنا، وفرج همومنا، واكشف كروبنا.",
    description: "",
    virtues: ""
  },
  {
    id: 67,
    title:"",
    text: "اللهم أوردنا حوض نبيك سيدنا محمد -صلى الله عليه وسلم-، واجعله لنا شفيعاً.",
    description: "",
    virtues: ""
  },
  {
    id: 68,
    title:"",
    text: "اللهم اسقنا من يد النبي الكريم الشريفة شربة لا نظمأ بعدها أبدًا.",
    description: "",
    virtues: ""
  },
  {
    id: 69,
    title:"",
    text: "اللهم اغفر للمؤمنين والمؤمنات، والمسلمين و المسلمات، الأحياء منهم والأموات، إنّكَ سميع قريب مُجيب الدعوات يا رب العالمين.",
    description: "",
    virtues: ""
  },
  {
    id: 70,
    title:"",
    text: "اللهم أصلح ذات بيننا، وألّف بين قلوبنا، وانصرنا على أعدائنا، وجنبنا الفواحش ما ظهر منها وما بطن.",
    description: "",
    virtues: ""
  },
  {
    id: 71,
    title:"",
    text: "اللهم بارك لنا في أسماعنا وأبصارنا وقواتنا ما أحييتنا، وبارك لنا في أزواجنا وذرياتنا ما أبقيتنا.",
    description: "",
    virtues: ""
  },
  {
    id: 72,
    title:"",
    text: "اللهم اجعلنا شاكرين لنعمك برحمتك يا أرحم الراحمين.",
    description: "",
    virtues: ""
  },
   {
    id: 73,
    title:"",
    text: "اللهم صلِّ صلاتك الكاملة وسلّم سلامك التام على سيدنا محمد عبدك ونبيك ورسولك النبي الأمّي وعلى آله وصحبه وسلّم.",
    description: "",
    virtues: ""
  },
];
export default prayers;