(function($){
    $(document).ready(function(){
        $('.pics').cycle('fade');
    });
})(jQuery);

window.addEventListener( "load", start, false );

var table_body;
var houseDataHead = "編號,房東資料,出租地址,聯絡電話,租金,押金,坪數,屋齡(年),隔間,性別限制";
var houseData = "00,林錫祥,基隆市中正區祥豐街803號4樓,0910252717,4000,5000,4,28,水泥,不限,," +
                "01,張賢文,基隆市中正區新豐街208號12樓,0920780198,5500,11000,10,18,水泥,不限,," +
                "02,林小姐,基隆市信義區新豐街303巷13弄13號4樓,0978732535,10000,20000,34,19,水泥,不限,," +
                "03,張先生,基隆市中正區新豐街358號3樓,0932163311,3000,3000,25,15,水泥,不限,," +
                "04,許榮倉,基隆市中正區立德路71號1F,0912571779,2500,5000,3,12,水泥,不限,," +
                "05,許榮倉,基隆市中正區立德路71之1號1F,0912571779,3500,7000,5,12,水泥,不限,," +
                "06,李秀寶,基隆市中正區中正路656巷71弄34號4樓,0981742138,2500,3000,20,20,水泥,不限,," +
                "07,黃太太,基隆市中正區觀海街53號14樓,0988474036,5100,5100,4,17,水泥,不限,," +
                "08,郭金英,基隆市中正區新豐街329巷33號,0910073007,3000,3000,40,30,水泥,不限,," +
                "09,黃媽媽,基隆市中正區中正路764號5樓,0980038435,7500,15000,8,28,水泥,不限,," +
                "10,柯秀幸,基隆市中正區正濱里中正路760巷6號3樓,0917506979,4000,4000,23,25,木板,女,," +
                "11,陳健成,基隆市中正區觀海街157號16樓,0988296901,5000,10000,10,17,水泥,不限,," +
                "12,許春萬,基隆市中正區新豐街323巷31號,0937930129,5333,9000,6,8,水泥,不限,," +
                "13,王敦正,基隆實中正區新豐街303巷13弄19號3樓,0963053629,3000,3000,27,19,水泥,不限,," +
                "14,吳黃娘珍,基隆市中正區和平街35巷3號,0914200007,3000,3000,56,19,水泥,不限,," +
                "15,林雅琢,基隆市中正區中正路726-6號2樓,0911951561,5500,5500,6,25,水泥,不限";

function start() {
  var table_head = document.getElementById("Table_head");
  table_body = document.getElementById("Table_body");

  houseData = houseData.split(",,");
  houseDataHead = houseDataHead.split(",");
  for (var i in houseData) {
    houseData[i] = houseData[i].split(",");
  }

  printTableHead(table_head);
  printTable();

  document.getElementById("sort0").addEventListener( "click", function() { sort(0); }, false);
  document.getElementById("sort3").addEventListener( "click", function() { sort(3); }, false);
  document.getElementById("sort4").addEventListener( "click", function() { sort(4); }, false);
  document.getElementById("sort5").addEventListener( "click", function() { sort(5); }, false);
  document.getElementById("sort6").addEventListener( "click", function() { sort(6); }, false);
  document.getElementById("sort7").addEventListener( "click", function() { sort(7); }, false);

}

function printTableHead(table_head) {
  var temp = "<tr>";
  for (var j = 0; j <= 9; j++) {
    if ((j >= 3 && j <= 7) || j == 0 ) temp += "<th class = 'th_hover' id = 'sort" + j + "'>" + houseDataHead[j] +" <i class='fa fa-chevron-down' aria-hidden = 'true'></i></th>";
    else temp += "<th>" + houseDataHead[j];
  }
  table_head.innerHTML = temp + "</tr>";
}

function printTable() {
  var temp = "";
  for (var i = 0; i <= 15 ; i++) {
    temp += "<tr>";
    for (j = 0; j <= 9; j++) {
      if (j >= 4 && j <= 7) temp += "<td class = 'textAlignRight'>";
      else temp += "<td>";
      temp += houseData[i][j] + "</td>";
    }
    temp += "</tr>";
  }
  table_body.innerHTML = temp;

}

function sort(sortItem) {
  switch (sortItem) {
    case 0:
      houseData.sort(function(a, b) { return a[0] - b[0]; });
      break;
    case 3:
      houseData.sort(function(a, b) { return a[3] - b[3]; });
      break;
    case 4:
      houseData.sort(function(a, b) { return a[4] - b[4]; });
      break;
    case 5:
      houseData.sort(function(a, b) { return a[5] - b[5]; });
      break;
    case 6:
      houseData.sort(function(a, b) { return a[6] - b[6]; });
      break;
    case 7:
      houseData.sort(function(a, b) { return a[7] - b[7]; });
      break;
    default:
      break;
  }
  printTable();
}
