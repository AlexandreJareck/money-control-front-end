(self.webpackChunkboilerplate_nextjs12=self.webpackChunkboilerplate_nextjs12||[]).push([[179],{15825:(i,s,r)=>{var t={"./Binary_Property/ASCII.js":75192,"./Binary_Property/ASCII_Hex_Digit.js":5702,"./Binary_Property/Alphabetic.js":29327,"./Binary_Property/Any.js":81039,"./Binary_Property/Assigned.js":68699,"./Binary_Property/Bidi_Control.js":1e3,"./Binary_Property/Bidi_Mirrored.js":10686,"./Binary_Property/Case_Ignorable.js":49640,"./Binary_Property/Cased.js":33796,"./Binary_Property/Changes_When_Casefolded.js":36981,"./Binary_Property/Changes_When_Casemapped.js":12250,"./Binary_Property/Changes_When_Lowercased.js":74945,"./Binary_Property/Changes_When_NFKC_Casefolded.js":43805,"./Binary_Property/Changes_When_Titlecased.js":33448,"./Binary_Property/Changes_When_Uppercased.js":43051,"./Binary_Property/Dash.js":15932,"./Binary_Property/Default_Ignorable_Code_Point.js":63654,"./Binary_Property/Deprecated.js":81532,"./Binary_Property/Diacritic.js":10890,"./Binary_Property/Emoji.js":91230,"./Binary_Property/Emoji_Component.js":70304,"./Binary_Property/Emoji_Modifier.js":60578,"./Binary_Property/Emoji_Modifier_Base.js":63305,"./Binary_Property/Emoji_Presentation.js":78163,"./Binary_Property/Extended_Pictographic.js":39694,"./Binary_Property/Extender.js":33255,"./Binary_Property/Grapheme_Base.js":64328,"./Binary_Property/Grapheme_Extend.js":80627,"./Binary_Property/Hex_Digit.js":49625,"./Binary_Property/IDS_Binary_Operator.js":39881,"./Binary_Property/IDS_Trinary_Operator.js":59580,"./Binary_Property/ID_Continue.js":62581,"./Binary_Property/ID_Start.js":52228,"./Binary_Property/Ideographic.js":10845,"./Binary_Property/Join_Control.js":73885,"./Binary_Property/Logical_Order_Exception.js":52505,"./Binary_Property/Lowercase.js":56268,"./Binary_Property/Math.js":26116,"./Binary_Property/Noncharacter_Code_Point.js":14108,"./Binary_Property/Pattern_Syntax.js":4038,"./Binary_Property/Pattern_White_Space.js":73359,"./Binary_Property/Quotation_Mark.js":55376,"./Binary_Property/Radical.js":48486,"./Binary_Property/Regional_Indicator.js":7988,"./Binary_Property/Sentence_Terminal.js":90597,"./Binary_Property/Soft_Dotted.js":76856,"./Binary_Property/Terminal_Punctuation.js":33467,"./Binary_Property/Unified_Ideograph.js":55081,"./Binary_Property/Uppercase.js":96630,"./Binary_Property/Variation_Selector.js":38805,"./Binary_Property/White_Space.js":69162,"./Binary_Property/XID_Continue.js":57640,"./Binary_Property/XID_Start.js":28769,"./General_Category/Cased_Letter.js":32446,"./General_Category/Close_Punctuation.js":88999,"./General_Category/Connector_Punctuation.js":23330,"./General_Category/Control.js":60037,"./General_Category/Currency_Symbol.js":30526,"./General_Category/Dash_Punctuation.js":27944,"./General_Category/Decimal_Number.js":37757,"./General_Category/Enclosing_Mark.js":68172,"./General_Category/Final_Punctuation.js":20036,"./General_Category/Format.js":44015,"./General_Category/Initial_Punctuation.js":7185,"./General_Category/Letter.js":83819,"./General_Category/Letter_Number.js":86687,"./General_Category/Line_Separator.js":42679,"./General_Category/Lowercase_Letter.js":86962,"./General_Category/Mark.js":15907,"./General_Category/Math_Symbol.js":47978,"./General_Category/Modifier_Letter.js":49504,"./General_Category/Modifier_Symbol.js":6137,"./General_Category/Nonspacing_Mark.js":94024,"./General_Category/Number.js":25585,"./General_Category/Open_Punctuation.js":73153,"./General_Category/Other.js":55181,"./General_Category/Other_Letter.js":27710,"./General_Category/Other_Number.js":80861,"./General_Category/Other_Punctuation.js":85489,"./General_Category/Other_Symbol.js":23791,"./General_Category/Paragraph_Separator.js":54788,"./General_Category/Private_Use.js":20265,"./General_Category/Punctuation.js":26009,"./General_Category/Separator.js":15333,"./General_Category/Space_Separator.js":81644,"./General_Category/Spacing_Mark.js":40439,"./General_Category/Surrogate.js":13375,"./General_Category/Symbol.js":64089,"./General_Category/Titlecase_Letter.js":58097,"./General_Category/Unassigned.js":75763,"./General_Category/Uppercase_Letter.js":61647,"./Script/Adlam.js":46075,"./Script/Ahom.js":39969,"./Script/Anatolian_Hieroglyphs.js":13636,"./Script/Arabic.js":91732,"./Script/Armenian.js":62632,"./Script/Avestan.js":19121,"./Script/Balinese.js":77495,"./Script/Bamum.js":87447,"./Script/Bassa_Vah.js":9887,"./Script/Batak.js":60379,"./Script/Bengali.js":15720,"./Script/Bhaiksuki.js":38990,"./Script/Bopomofo.js":70223,"./Script/Brahmi.js":4330,"./Script/Braille.js":98064,"./Script/Buginese.js":10771,"./Script/Buhid.js":32057,"./Script/Canadian_Aboriginal.js":60633,"./Script/Carian.js":79534,"./Script/Caucasian_Albanian.js":26497,"./Script/Chakma.js":72865,"./Script/Cham.js":43178,"./Script/Cherokee.js":74101,"./Script/Chorasmian.js":42115,"./Script/Common.js":38908,"./Script/Coptic.js":35520,"./Script/Cuneiform.js":21297,"./Script/Cypriot.js":36862,"./Script/Cypro_Minoan.js":77039,"./Script/Cyrillic.js":81162,"./Script/Deseret.js":61500,"./Script/Devanagari.js":29061,"./Script/Dives_Akuru.js":17135,"./Script/Dogra.js":43441,"./Script/Duployan.js":92481,"./Script/Egyptian_Hieroglyphs.js":23164,"./Script/Elbasan.js":56500,"./Script/Elymaic.js":78940,"./Script/Ethiopic.js":16882,"./Script/Georgian.js":82517,"./Script/Glagolitic.js":24569,"./Script/Gothic.js":32793,"./Script/Grantha.js":90967,"./Script/Greek.js":62463,"./Script/Gujarati.js":91524,"./Script/Gunjala_Gondi.js":59711,"./Script/Gurmukhi.js":81375,"./Script/Han.js":15100,"./Script/Hangul.js":34694,"./Script/Hanifi_Rohingya.js":61523,"./Script/Hanunoo.js":33672,"./Script/Hatran.js":2838,"./Script/Hebrew.js":15620,"./Script/Hiragana.js":29519,"./Script/Imperial_Aramaic.js":12377,"./Script/Inherited.js":22720,"./Script/Inscriptional_Pahlavi.js":98966,"./Script/Inscriptional_Parthian.js":4058,"./Script/Javanese.js":58963,"./Script/Kaithi.js":61594,"./Script/Kannada.js":13801,"./Script/Katakana.js":23362,"./Script/Kayah_Li.js":21831,"./Script/Kharoshthi.js":47296,"./Script/Khitan_Small_Script.js":40660,"./Script/Khmer.js":71329,"./Script/Khojki.js":49570,"./Script/Khudawadi.js":23794,"./Script/Lao.js":45055,"./Script/Latin.js":38046,"./Script/Lepcha.js":33082,"./Script/Limbu.js":22888,"./Script/Linear_A.js":60169,"./Script/Linear_B.js":20670,"./Script/Lisu.js":83545,"./Script/Lycian.js":75711,"./Script/Lydian.js":72161,"./Script/Mahajani.js":40946,"./Script/Makasar.js":68602,"./Script/Malayalam.js":77706,"./Script/Mandaic.js":93301,"./Script/Manichaean.js":3644,"./Script/Marchen.js":83947,"./Script/Masaram_Gondi.js":63852,"./Script/Medefaidrin.js":60713,"./Script/Meetei_Mayek.js":13817,"./Script/Mende_Kikakui.js":6716,"./Script/Meroitic_Cursive.js":55779,"./Script/Meroitic_Hieroglyphs.js":82326,"./Script/Miao.js":91428,"./Script/Modi.js":1626,"./Script/Mongolian.js":77659,"./Script/Mro.js":31623,"./Script/Multani.js":18850,"./Script/Myanmar.js":54914,"./Script/Nabataean.js":59839,"./Script/Nandinagari.js":8362,"./Script/New_Tai_Lue.js":48837,"./Script/Newa.js":82323,"./Script/Nko.js":53723,"./Script/Nushu.js":53406,"./Script/Nyiakeng_Puachue_Hmong.js":24820,"./Script/Ogham.js":20277,"./Script/Ol_Chiki.js":29209,"./Script/Old_Hungarian.js":17625,"./Script/Old_Italic.js":29326,"./Script/Old_North_Arabian.js":73282,"./Script/Old_Permic.js":66387,"./Script/Old_Persian.js":27616,"./Script/Old_Sogdian.js":40693,"./Script/Old_South_Arabian.js":69015,"./Script/Old_Turkic.js":25353,"./Script/Old_Uyghur.js":56050,"./Script/Oriya.js":32903,"./Script/Osage.js":12963,"./Script/Osmanya.js":82268,"./Script/Pahawh_Hmong.js":47976,"./Script/Palmyrene.js":41850,"./Script/Pau_Cin_Hau.js":23182,"./Script/Phags_Pa.js":43317,"./Script/Phoenician.js":11471,"./Script/Psalter_Pahlavi.js":59040,"./Script/Rejang.js":89299,"./Script/Runic.js":62691,"./Script/Samaritan.js":82681,"./Script/Saurashtra.js":60502,"./Script/Sharada.js":68031,"./Script/Shavian.js":6568,"./Script/Siddham.js":32433,"./Script/SignWriting.js":85181,"./Script/Sinhala.js":97164,"./Script/Sogdian.js":51877,"./Script/Sora_Sompeng.js":98914,"./Script/Soyombo.js":46663,"./Script/Sundanese.js":99678,"./Script/Syloti_Nagri.js":93562,"./Script/Syriac.js":30658,"./Script/Tagalog.js":24183,"./Script/Tagbanwa.js":44968,"./Script/Tai_Le.js":62519,"./Script/Tai_Tham.js":29636,"./Script/Tai_Viet.js":24749,"./Script/Takri.js":58749,"./Script/Tamil.js":12718,"./Script/Tangsa.js":5375,"./Script/Tangut.js":90,"./Script/Telugu.js":81835,"./Script/Thaana.js":65621,"./Script/Thai.js":20203,"./Script/Tibetan.js":5645,"./Script/Tifinagh.js":12783,"./Script/Tirhuta.js":27289,"./Script/Toto.js":36850,"./Script/Ugaritic.js":51500,"./Script/Vai.js":60854,"./Script/Vithkuqi.js":25180,"./Script/Wancho.js":21142,"./Script/Warang_Citi.js":30717,"./Script/Yezidi.js":84108,"./Script/Yi.js":25237,"./Script/Zanabazar_Square.js":82298,"./Script_Extensions/Adlam.js":14529,"./Script_Extensions/Ahom.js":50946,"./Script_Extensions/Anatolian_Hieroglyphs.js":31162,"./Script_Extensions/Arabic.js":21067,"./Script_Extensions/Armenian.js":12719,"./Script_Extensions/Avestan.js":77391,"./Script_Extensions/Balinese.js":23971,"./Script_Extensions/Bamum.js":60253,"./Script_Extensions/Bassa_Vah.js":65068,"./Script_Extensions/Batak.js":67081,"./Script_Extensions/Bengali.js":48850,"./Script_Extensions/Bhaiksuki.js":91361,"./Script_Extensions/Bopomofo.js":1085,"./Script_Extensions/Brahmi.js":78339,"./Script_Extensions/Braille.js":60223,"./Script_Extensions/Buginese.js":84280,"./Script_Extensions/Buhid.js":98097,"./Script_Extensions/Canadian_Aboriginal.js":95730,"./Script_Extensions/Carian.js":62162,"./Script_Extensions/Caucasian_Albanian.js":32681,"./Script_Extensions/Chakma.js":63055,"./Script_Extensions/Cham.js":30418,"./Script_Extensions/Cherokee.js":83042,"./Script_Extensions/Chorasmian.js":22693,"./Script_Extensions/Common.js":65935,"./Script_Extensions/Coptic.js":59018,"./Script_Extensions/Cuneiform.js":15853,"./Script_Extensions/Cypriot.js":91064,"./Script_Extensions/Cypro_Minoan.js":87826,"./Script_Extensions/Cyrillic.js":85760,"./Script_Extensions/Deseret.js":70288,"./Script_Extensions/Devanagari.js":98239,"./Script_Extensions/Dives_Akuru.js":86980,"./Script_Extensions/Dogra.js":51598,"./Script_Extensions/Duployan.js":4546,"./Script_Extensions/Egyptian_Hieroglyphs.js":40032,"./Script_Extensions/Elbasan.js":51991,"./Script_Extensions/Elymaic.js":96519,"./Script_Extensions/Ethiopic.js":79461,"./Script_Extensions/Georgian.js":34977,"./Script_Extensions/Glagolitic.js":88426,"./Script_Extensions/Gothic.js":79854,"./Script_Extensions/Grantha.js":17645,"./Script_Extensions/Greek.js":7833,"./Script_Extensions/Gujarati.js":67773,"./Script_Extensions/Gunjala_Gondi.js":88093,"./Script_Extensions/Gurmukhi.js":74965,"./Script_Extensions/Han.js":26062,"./Script_Extensions/Hangul.js":16607,"./Script_Extensions/Hanifi_Rohingya.js":89786,"./Script_Extensions/Hanunoo.js":54524,"./Script_Extensions/Hatran.js":19193,"./Script_Extensions/Hebrew.js":9815,"./Script_Extensions/Hiragana.js":53081,"./Script_Extensions/Imperial_Aramaic.js":65138,"./Script_Extensions/Inherited.js":26413,"./Script_Extensions/Inscriptional_Pahlavi.js":91065,"./Script_Extensions/Inscriptional_Parthian.js":46124,"./Script_Extensions/Javanese.js":44689,"./Script_Extensions/Kaithi.js":62174,"./Script_Extensions/Kannada.js":41270,"./Script_Extensions/Katakana.js":21540,"./Script_Extensions/Kayah_Li.js":22705,"./Script_Extensions/Kharoshthi.js":14004,"./Script_Extensions/Khitan_Small_Script.js":36251,"./Script_Extensions/Khmer.js":70585,"./Script_Extensions/Khojki.js":65913,"./Script_Extensions/Khudawadi.js":52377,"./Script_Extensions/Lao.js":82554,"./Script_Extensions/Latin.js":48555,"./Script_Extensions/Lepcha.js":49915,"./Script_Extensions/Limbu.js":57117,"./Script_Extensions/Linear_A.js":38384,"./Script_Extensions/Linear_B.js":9454,"./Script_Extensions/Lisu.js":43872,"./Script_Extensions/Lycian.js":98544,"./Script_Extensions/Lydian.js":58368,"./Script_Extensions/Mahajani.js":17391,"./Script_Extensions/Makasar.js":57004,"./Script_Extensions/Malayalam.js":30395,"./Script_Extensions/Mandaic.js":86489,"./Script_Extensions/Manichaean.js":77929,"./Script_Extensions/Marchen.js":52302,"./Script_Extensions/Masaram_Gondi.js":38303,"./Script_Extensions/Medefaidrin.js":20220,"./Script_Extensions/Meetei_Mayek.js":20747,"./Script_Extensions/Mende_Kikakui.js":64510,"./Script_Extensions/Meroitic_Cursive.js":78636,"./Script_Extensions/Meroitic_Hieroglyphs.js":46922,"./Script_Extensions/Miao.js":93366,"./Script_Extensions/Modi.js":5010,"./Script_Extensions/Mongolian.js":96882,"./Script_Extensions/Mro.js":42352,"./Script_Extensions/Multani.js":81121,"./Script_Extensions/Myanmar.js":28771,"./Script_Extensions/Nabataean.js":38338,"./Script_Extensions/Nandinagari.js":12280,"./Script_Extensions/New_Tai_Lue.js":31722,"./Script_Extensions/Newa.js":87021,"./Script_Extensions/Nko.js":48139,"./Script_Extensions/Nushu.js":6257,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":99242,"./Script_Extensions/Ogham.js":12168,"./Script_Extensions/Ol_Chiki.js":36624,"./Script_Extensions/Old_Hungarian.js":86433,"./Script_Extensions/Old_Italic.js":32687,"./Script_Extensions/Old_North_Arabian.js":1437,"./Script_Extensions/Old_Permic.js":87609,"./Script_Extensions/Old_Persian.js":72694,"./Script_Extensions/Old_Sogdian.js":82465,"./Script_Extensions/Old_South_Arabian.js":52300,"./Script_Extensions/Old_Turkic.js":88789,"./Script_Extensions/Old_Uyghur.js":18246,"./Script_Extensions/Oriya.js":60031,"./Script_Extensions/Osage.js":42438,"./Script_Extensions/Osmanya.js":81556,"./Script_Extensions/Pahawh_Hmong.js":70858,"./Script_Extensions/Palmyrene.js":52533,"./Script_Extensions/Pau_Cin_Hau.js":46408,"./Script_Extensions/Phags_Pa.js":69476,"./Script_Extensions/Phoenician.js":44888,"./Script_Extensions/Psalter_Pahlavi.js":94432,"./Script_Extensions/Rejang.js":98988,"./Script_Extensions/Runic.js":77885,"./Script_Extensions/Samaritan.js":83147,"./Script_Extensions/Saurashtra.js":64001,"./Script_Extensions/Sharada.js":14128,"./Script_Extensions/Shavian.js":6669,"./Script_Extensions/Siddham.js":40809,"./Script_Extensions/SignWriting.js":88306,"./Script_Extensions/Sinhala.js":36607,"./Script_Extensions/Sogdian.js":29856,"./Script_Extensions/Sora_Sompeng.js":69423,"./Script_Extensions/Soyombo.js":85426,"./Script_Extensions/Sundanese.js":31870,"./Script_Extensions/Syloti_Nagri.js":75242,"./Script_Extensions/Syriac.js":86219,"./Script_Extensions/Tagalog.js":30949,"./Script_Extensions/Tagbanwa.js":33578,"./Script_Extensions/Tai_Le.js":5485,"./Script_Extensions/Tai_Tham.js":94089,"./Script_Extensions/Tai_Viet.js":90721,"./Script_Extensions/Takri.js":40933,"./Script_Extensions/Tamil.js":21739,"./Script_Extensions/Tangsa.js":62923,"./Script_Extensions/Tangut.js":58926,"./Script_Extensions/Telugu.js":66699,"./Script_Extensions/Thaana.js":48228,"./Script_Extensions/Thai.js":38029,"./Script_Extensions/Tibetan.js":12475,"./Script_Extensions/Tifinagh.js":97085,"./Script_Extensions/Tirhuta.js":86018,"./Script_Extensions/Toto.js":71784,"./Script_Extensions/Ugaritic.js":15319,"./Script_Extensions/Vai.js":45191,"./Script_Extensions/Vithkuqi.js":95599,"./Script_Extensions/Wancho.js":33011,"./Script_Extensions/Warang_Citi.js":91709,"./Script_Extensions/Yezidi.js":91739,"./Script_Extensions/Yi.js":98830,"./Script_Extensions/Zanabazar_Square.js":10795,"./index.js":73558,"./unicode-version.js":52258};function n(i){var s=a(i);return r(s)}function a(i){if(!r.o(t,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return t[i]}n.keys=function(){return Object.keys(t)},n.resolve=a,i.exports=n,n.id=15825},98517:()=>{},16354:()=>{},74829:()=>{}},i=>{i.O(0,[63],(()=>{return s=25455,i(i.s=s);var s}));i.O()}]);