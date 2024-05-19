
    const words = [
         {heb:'לומר', arb: ['ק','ו','ל'], bld: 1},
         {heb:'לראות', arb: ['ש','ו','פ'], bld: 1},
         {heb:'להיות', arb: ['כּ','ו','נ'], bld: 1},
         {heb:'ללכת', arb: ['ר','ו','ח'], bld: 1},
         {heb:'לבקר', arb: ['ז','ו','ר'], bld: 1},
         {heb:'להיכנס', arb: ['פ','ו','ת'], bld: 1},
         {heb:'לקום', arb: ['ק','ו','מ'], bld: 1},

         { "heb": "להפוך/לקרות/להיכנס למצב", "arb": ["צ", "י", "ר"], "bld": 2 },
         { "heb": "להביא", "arb": ["ג", "׳י", "בּ"], "bld": 2 },

          { "heb": "להבין", "arb": ["פ", "ה", "מ"], "bld": 3 },
          { "heb": "לשמוע", "arb": ["ס", "מ", "ע"], "bld": 3 },
          { "heb": "להכיר", "arb": ["ע", "ר", "פ"], "bld": 3 },
          { "heb": "לחזור", "arb": ["ר", "ג", "׳ע"], "bld": 3 },
          { "heb": "לשחק", "arb": ["ל", "ע", "בּ"], "bld": 3 },
          { "heb": "ללבוש", "arb": ["ל", "בּ", "ס"], "bld": 3 },
          { "heb": "לשתות", "arb": ["ש", "ר", "בּ"], "bld": 3 },

          { "heb": "לספר/להגיד", "arb": ["ח", "כּ", "י"], "bld": 4 },
          { "heb": "ללכת", "arb": ["מ", "ש", "י"], "bld": 4 },
          { "heb": "לבכות", "arb": ["בּ", "כּ", "י"], "bld": 4 },

          { "heb": "ללמוד", "arb": ["ת", "ע", "ל", "מ"], "bld": 5 },
          { "heb": "לאחר", "arb": ["ת", "א", "ח", "ר"], "bld": 5 },
          { "heb": "לקוות", "arb": ["ת", "א", "מ", "ל"], "bld": 5 },
          { "heb": "להתרגל", "arb": ["ת", "ע", "ו", "ד"], "bld": 5 },

          { "heb": "לעבוד", "arb": ["ש", "ת", "ע", "׳ל"], "bld": 6 },
          { "heb": "להיפגש", "arb": ["ג", "׳ת", "מ", "ע"], "bld": 6 },
          { "heb": "להשתתף", "arb": ["ש", "ת", "ר", "כּ"], "bld": 6 },
          { "heb": "לקבל משהו", "arb": ["ס", "ת", "ל", "מ"], "bld": 6 },
      ]

    const bodys = {'אני':1,
                  'אתה':2,
                  'את':3,
                  'הוא':4,
                  'היא':2,
                  'אנחנו':5,
                  'אתם/ן':6,
                  'הם/ן':7}

    const bld =
      {
          1: {
              1: ['בַּ(א)','','\u05BC','',''],
              2: ['בִּתְ','','\u05BC','',''],
              3: ['בִּתְ','','\u05BC','\u05B4','י'],
              4: ['בִּ(י)','','\u05BC','',''],
              5: ['בִּנְ','','\u05BC','',''],
              6: ['בִּתְ','','\u05BC','','וּ'],
              7: ['בִּ(י)','','\u05BC','','וּ'],
              },
          2: {
              1: ['בַּ(א)','\u05B4','','',''],
              2: ['בִּתְ','\u05B4','','',''],
              3: ['בִּתְ','\u05B4','','\u05B4','י'],
              4: ['בִּ(י)','\u05B4','','',''],
              5: ['בִּנְ','\u05B4','','',''],
              6: ['בִּתְ','\u05B4','','','וּ'],
              7: ['בִּ(י)','\u05B4','','','וּ'],
              },
          3: {
              1: ['בַּ(א)','\u05B0','\u05B7','',''],
              2: ['בְּתִ','\u05B0','\u05B7','',''],
              3: ['בְּתִ','\u05B0','\u05B7','\u05B4','י'],
              4: ['בִּ(י)','\u05B0','\u05B7','',''],
              5: ['בְּנִ','\u05B0','\u05B7','',''],
              6: ['בְּתִ','\u05B0','\u05B7','','וּ'],
              7: ['בִּ(י)','\u05B0','\u05B7','','וּ'],
              },
          4: {
              1: ['בַּ(א)','\u05B0','\u05B4','',''],
              2: ['בְּתִ','\u05B0','\u05B4','',''],
              3: ['בְּתִ','\u05B0','\u05B4','',''],
              4: ['בִּ(י)','\u05B0','\u05B4','',''],
              5: ['בְּנִ','\u05B0','\u05B4','',''],
              6: ['בְּתִ','\u05B0','','-','וּ'],
              7: ['בִּ(י)','\u05B0','','-','וּ'],
              },
          5: {
              1: ['בַּ(א)','\u05B0','\u05B8','\u05B8\u05BC','',''],
              2: ['בְּתִ','\u05B0','\u05B8','\u05B8\u05BC','',''],
              3: ['בְּתִ','\u05B0','\u05B8','\u05B8\u05BC','\u05B4','י'],
              4: ['בִּ(י)','\u05B0','\u05B8','\u05B8\u05BC','',''],
              5: ['בְּנִ','\u05B0','\u05B8','\u05B8\u05BC','',''],
              6: ['בְּתִ','\u05B0','\u05B8','\u05B8','','וּ'],
              7: ['בִּ(י)','\u05B0','\u05B8','\u05B8\u05BC','','וּ'],
              },
          6: {
              1: ['בַּ(א)','\u05B0','\u05B0','\u05B5','',''],
              2: ['בְּתִ','\u05B0','\u05B0','\u05B5','',''],
              3: ['בְּתִ','\u05B0','\u05B4','\u05B0','\u05B0','י'],
              4: ['בִּ(י)','\u05B0','\u05B0','\u05B5','',''],
              5: ['בְּנִ','\u05B0','\u05B0','\u05B5','',''],
              6: ['בְּתִ','\u05B0','\u05B4','\u05B0','','וּ'],
              7: ['בִּ(י)','\u05B0','\u05B4','\u05B0','','וּ'],
              }
      }

    lastMap = {'נ':'ן',
               'כ':'ך',
               'צ':'ץ',
               'מ':'ם',
               'פ':'ף'
              }

    function populateSelectBox(selectBoxId, list) {
    const selectBox = document.getElementById(selectBoxId);
    // Clear existing options
    selectBox.innerHTML = "";
    // Populate options
    list.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        selectBox.appendChild(optionElement);
    });
}




    function chooseRandomValue(selectBoxId, randomIndex) {
    const selectBox = document.getElementById(selectBoxId);
    selectBox.selectedIndex = randomIndex;
    }

    // Function to display a random word
    function displayRandomWord() {

      
      
      var randomIndex = Math.floor(Math.random() * words.length);
      chooseRandomValue("select-box-1", randomIndex);
      const randomWord = words[randomIndex];
      const keys = Object.keys(bodys);
      randomIndex = Math.floor(Math.random() * keys.length);
      chooseRandomValue("select-box-2", randomIndex);

      displayWord();
    }

    function displayWord(){
        hebValue = document.getElementById("select-box-1").value;
        word = words.find(item => item.heb === hebValue);
        body = document.getElementById("select-box-2").value;

        document.getElementById("word").textContent = body + ' - '+ word.heb;
        document.getElementById("meaning-box").style.display = "none";
        document.getElementById("synonym-box").style.display = "none";
        document.getElementById("meaning").textContent = joinRoot(word, body);
        document.getElementById("synonym").textContent = word.arb.join('')
    }

    function mergeStrings(s1, s2) {
          let merged = '';
          const maxLength = Math.max(s1.length, s2.length);

          for (let i = 0; i < maxLength; i++) {
            if (i < s1.length) {
              //removed char if nesseary
              if(s1[i] == '-'){
                merged = merged.slice(0,-1)
              }
              else {
              merged += s1[i];
              }
            }
            if (i < s2.length) {
              merged += s2[i];
            }
          }
          var lastIndexchar = merged[merged.length - 1];
          if (lastMap.hasOwnProperty(lastIndexchar))
          {
            merged = merged.slice(0, -1) + lastMap[lastIndexchar] ;
          }
          return merged;
        }


    function joinRoot(wordObj, body) {
      var root = wordObj.arb
      var bodyNum = bodys[body]
      var bldNum = wordObj.bld
      var pattern = bld[bldNum][bodyNum]
      var full = mergeStrings(pattern, root)
      return full
    }


    // Function to show the meaning of the word
    function showMeaning() {
        document.getElementById("meaning-box").style.display = "block";
        document.getElementById("synonym-box").style.display = "none";
    }

    // Function to show the synonym of the word
    function showSynonym() {
        document.getElementById("synonym-box").style.display = "block";
        document.getElementById("meaning-box").style.display = "none";
    }

     function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

      function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }


