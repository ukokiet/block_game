//T型ブロックの回転パターン４つを描く
block = [
  [
    //ブロック０
    [
      [0,0,0,0],
      [1,1,1,0],
      [0,1,0,0],
      [0,0,0,0],
    ],
    [
      [0,1,0,0],
      [0,1,1,0],
      [0,1,0,0],
      [0,0,0,0],
    ],
    [
      [0,1,0,0],
      [1,1,1,0],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,1,0,0],
      [1,1,0,0],
      [0,1,0,0],
      [0,0,0,0],
    ]
  ],

  [
    //ブロック1
    [
      [0,0,0,0],
      [1,1,1,0],
      [1,0,0,0],
      [0,0,0,0],
    ],
    [
      [1,0,0,0],
      [1,0,0,0],
      [1,1,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,0,1,0],
      [1,1,1,0],
      [0,0,0,0],
    ],
    [
      [1,1,0,0],
      [0,1,0,0],
      [0,1,0,0],
      [0,0,0,0],
    ]
  ],

  [
    //ブロック2
    [
      [0,0,0,0],
      [1,1,0,0],
      [0,1,1,0],
      [0,0,0,0],
    ],
    [
      [0,1,0,0],
      [1,1,0,0],
      [1,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [1,1,0,0],
      [0,1,1,0],
      [0,0,0,0],
    ],
    [
      [0,1,0,0],
      [1,1,0,0],
      [1,0,0,0],
      [0,0,0,0],
    ]
  ],

  [
    //ブロック3
    [
      [0,0,0,0],
      [0,1,1,0],
      [1,1,0,0],
      [0,0,0,0],
    ],
    [
      [1,0,0,0],
      [1,1,0,0],
      [0,1,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [1,1,0,0],
      [0,0,0,0],
    ],
    [
      [1,0,0,0],
      [1,1,0,0],
      [0,1,0,0],
      [0,0,0,0],
    ]
  ],

  [
    //ブロック4
    [
      [0,0,0,0],
      [1,1,1,0],
      [0,0,1,0],
      [0,0,0,0],
    ],
    [
      [1,1,0,0],
      [1,0,0,0],
      [1,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [1,0,0,0],
      [1,1,1,0],
      [0,0,0,0],
    ],
    [
      [0,1,0,0],
      [0,1,0,0],
      [1,1,0,0],
      [0,0,0,0],
    ]
  ],

  [
    //ブロック5
    [
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0],
    ],
    [
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0],
    ]
  ],

  [
    //ブロック6
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0],
    ]
  ],

];

//ブロックの色
biro = ['#CC00CC', '#FFA500', '#CC0000', '#00CC00',
 '#CC0000', '#00CCCC', '#CCCC00'];

function tsugiwotsukuru() {
  //次のブロックを作る
  btsugi = Math.floor(Math.random() * 7);

  //次のブロックを表示するためのキャンバスを取得
  tsugigamen = document.getElementById('tsugi');
  ct = tsugigamen.getContext('2d');

  //表示前に消す
  ct.clearRect(0, 0, 79, 79);

  //そこに描画する
  kaku(ct, 0, 0, 0, btsugi);
}

//ブロックが置けるか確認する関数
function kakunin(bx, by, muki, shurui) {
  p = block[shurui][muki];
  for (n = 0; n < 4; n++) {
    for (m = 0; m < 4; m++) {
      if (p[n][m] == 1) {
        //ブロックを描画する位置が空欄かどうかを調べる

        //Xが範囲外のところには動かせない
        if((bx + m < 0) || (bx + m > 11)) {
          return false;
        }

        //Yが範囲外のところには動かせない
        if((by + n < 0) || (by + n > 21)) {
          return false;
        }

        //空欄ではない場合は動かせない
        if(jyoutai[by + n][bx + m] != 100) {
          return false;
        }
      }
    }
  }
    return true;
}

function shitaidou() {
  //下に移動する
  //描く先のCanvasを取得
  gamegamen = document.getElementById('game');
  cg = gamegamen.getContext('2d');
  //現在の座標と向きを保存
  maenoix = ix;
  maenoiy = iy;
  maenoimuki = imuki;

  //いまの場所のものを消す
  kesu(cg, ix, iy, imuki, ishurui);

  //下に移動
  iy = iy + 1;

  //音を出す
  document.getElementById('ochiru').play();

  //移動できるかどうかを確認する
  kekka = kakunin(ix, iy, imuki, ishurui);
  if (kekka) {
    //移動できる
    //新しい位置に描く
    kaku(cg, ix, iy, imuki, ishurui);
  } else {
    //移動できない
    //移動前の場所、向きに戻す
    ix = maenoix;
    iy = maenoiy;
    imuki = maenoimuki;
    kaku(cg, ix, iy, imuki, ishurui);

    //この位置を当たり判定用の配列に設定する
    p = block[ishurui][imuki];
    for (n = 0; n < 4; n++) {
      for (m = 0; m < 4; m++) {
        if (p[n][m] == 1) {
          jyoutai[iy + n][ix + m] = ishurui;
        }
      }
    }
    //音を出す
    document.getElementById('don').play();

    //ライン消しと得点計算する
    tokutenkeisan();

    //次のブロックとして設定したものが落ちてくるようにする
    ix = 4;
    iy = 0;
    ishurui = btsugi;
    imuki = 0;
    kaku(cg, ix, iy, imuki, ishurui);

    //次のブロックを表示したときに他と重なるかを調べる
    kekka = kakunin(ix, iy, imuki, ishurui);
    if(!kekka) {
      //重なっているのでゲームオーバー
      document.getElementById('gameover').play();
      //メッセージを出す
      alert('GAMEOVER');
      //実行中であることを止める
      jikkou = false;
    
    }



    //さらに次のブロックを設定
    tsugiwotsukuru();
  }

  //時間を少しずつ速くする
  jikan = jikan - 1;
  if (jikan < 30) {
    //すごく速くなったらもとに戻す
    jikan = 1000;
  }
}




//キーが押されたときの関数
function ugokasu(e) {
  //描く先のCanvasを取得
  gamegamen = document.getElementById('game');
  cg = gamegamen.getContext('2d');

  //現在の座標と向きを保存
  maenoix = ix;
  maenoiy = iy;
  maenoimuki = imuki;

  //今のブロックを消す
  kesu(cg, ix, iy, imuki, ishurui);

  //「→」キーが押されたかどうか
  if(e.keyCode == 39) {
    //右に移動
    ix++;
    //音を鳴らす
    document.getElementById('kaiten').play();
  }


  //「←」キーが押されたかどうか
  if(e.keyCode == 37) {
    //左に移動
    ix--;
    //音を鳴らす
    document.getElementById('kaiten').play();
  }

  //「↑」キーが押されたかどうか
  if(e.keyCode == 38) {
    //回転する
    imuki++;
    if(imuki > 3) {
      imuki = 0;
    }
    //音を鳴らす
    document.getElementById('kaiten').play();
  }

  //「↓」キーが押されたときは下に移動させる
  if(e.keyCode == 40) {
    shitaidou();
  }
  //移動、回転できるかどうかを確認
  kekka = kakunin(ix, iy, imuki, ishurui);
  if (!kekka) {
    //回転、移動できない
    //元に戻す
    ix = maenoix;
    iy = maenoiy;
    imuki = maenoimuki;
  }

  //新しい場所にブロックを描く
  kaku(cg, ix, iy, imuki, ishurui);

}

//ブロックを消す関数
function kesu(c, bx, by, imuki, shurui) {
  //ブロックを消す処理にする
  c.globalCompositeOperation = 'destination-out';

  //描く（実際は消える）
  kaku(c, bx, by, imuki, shurui);

  //元の描く処理に戻す
  c.globalCompositeOperation = 'source-over';
}


//ブロックを描く関数 (cは描画先の２Dコンテキスト、
//bxは描く先の左からの位置、byは描く先の上からの位置)
//mukiはブロックの回転する向き, shuruiはブロックの色の種類
function kaku(c, bx, by, muki, shurui) {
  //ブロックの色と線
  c.fillStyle = biro[shurui];
  c.strokeStyle = '#333333';
  c.lineWidth = 3;

  //色と向きのパターンを決める
  p = block[shurui][muki];

  //パターン通りに描く:mは右方向、nは下方向：左上のブロックはnとmが[0][0]
  for (n = 0; n < 4; n++) {
    for (m = 0; m < 4; m++) {
      //描くかどうか
      if(p[n][m] == 1) {
        //ここに描く
        c.fillRect((bx + m) * 20, (by + n) * 20, 20, 20);
        c.strokeRect((bx + m) * 20, (by + n) * 20, 20, 20);
      }
    }
  }

}

//ブロックの状態の変数
jyoutai = [];

function tokutenkeisan() {
  //消えたライン数を保存する変数
  kosuu = 0;

  //全ラインをチェック
  for (y = 0; y < 21; y++) {
    sorottenai = false;
    for (x = 1; x <= 10; x++) {
      if ((jyoutai[y][x] == 100) || (jyoutai[y][x] == 99)) {
        //ブロックがない（隙間または壁）
        sorottenai = true;
      }
    } if (!sorottenai) {
      //揃っている
      kosuu = kosuu + 1;

      //音を出す
      document.getElementById('kieru').play();

      //上から詰める
      for (k = y; k > 0; k--) {
        for (x = 1; x <= 10; x++) {
          jyoutai[k][x] = jyoutai[k-1][x];
        }
      }
    }
  }

  //ブロックを全部描きなおす
  //１．キャンバスを取得する
  gamegamen = document.getElementById('game');
  cg = gamegamen.getContext('2d');

  //２．全部消す
  cg.clearRect(0, 0, 239, 439);

  //３．ブロックがあるところを描く
  for (y = 0; y < 22; y++) {
    for (x = 0; x < 12; x++) {
      if ((jyoutai[y][x] != 100) && (jyoutai[y][x] !=99)) {
        //ブロックを描く
        cg.fillStyle = biro[jyoutai[y][x]];
        cg.strokeStyle = '#333333';
        cg.lineWidth = 3;
        cg.fillRect(x * 20, y * 20, 20, 20);
        cg.strokeRect(x * 20, y * 20, 20, 20);
      }
    }
  }

  //得点を計算する
  switch (kosuu) {
    case 1:
      tokuten = tokuten + 10;
      break;
    case 2:
      tokuten = tokuten + 20;
      break;
    case 3:
      tokuten = tokuten + 100;
      break;
    case 4:
      tokuten = tokuten + 1000;
      //4ラインのときは効果音を鳴らす
      document.getElementById('zenbu').play();
      break;
  }

  //得点を表示する
  tgamen = document.getElementById('tokuten');
  tgamen.innerHTML = tokuten;

}

//タイマーから実行される関数
function jikandeugokasu() {
  if(jikkou) {
    //実行中
    //下に動かす
    shitaidou();
    //次の時間を設定
    setTimeout(jikandeugokasu, jikan);
  }
}

//ゲーム開始の関数（gamegamen, cgは変数）
function gamekaishi() {

  //描画先のCanvasを取得する
  gamegamen = document.getElementById('game');
  cg = gamegamen.getContext('2d');

  //画面を消す
  cg.clearRect(0, 0, 239, 439);

  //得点をゼロにする
  tokuten = 0;

  //ゲーム中に設定し、タイマーを設定する
  jikkou = true;
  jikan = 1000;
  setTimeout(jikandeugokasu, jikan);

  //状態をクリア、すべてを100に設定する
  jyoutai = new Array(22);
  for (i = 0; i < 22; i++) {
    jyoutai[i] = new Array(12);
    for (j = 0; j < 12; j++) {
      jyoutai[i][j] = 100;
    }
  }

  //左壁部分を99にする
  for (i = 0; i < 22; i++) {
    jyoutai[i][0] = 99;
  }

  //右壁部分を99にする
  for (i = 0; i < 22; i++) {
    jyoutai[i][11] = 99;
  }

  //下壁部分を99にする
  for (i = 0; i < 12; i++) {
    jyoutai[21][i] = 99;
  }


  //ランダムなブロックを作る
  ix = 4;
  iy = 0;
  //向きを決める変数imuki
  imuki = Math.floor(Math.random() * 3);
  //ブロックの種類を決めるishurui
  ishurui = Math.floor(Math.random() * 7);

  //次のブロックをセットする
  tsugiwotsukuru();

　kaku(cg, ix, iy, imuki, ishurui);

  }


//ゲームの壁をつくる
function hajime() {

  //背景のCanvasを取得。（backgamen, cbは変数）
  backgamen = document.getElementById('back');
  cb = backgamen.getContext('2d');

  //塗りを設定
  cb.fillStyle = '#CCCCCC';

  //線を設定
  cb.strokeStyle = '#333333';
  cb.lineWidth = 3;

  //四角形を塗る
  cb.fillRect(0, 0, 20, 20);

  //四角形の枠線を描く
  cb.strokeRect(0, 0, 20, 20);

  //左壁を描く
  x = 0;
  y = 0;
  for (i = 0; i < 22; i++) {
    cb.fillRect(x, y, 20, 20);
    cb.strokeRect(x, y, 20, 20);
    y = y + 20;
  }

  //右壁を描く
  x = 220;
  y = 0;
  for (i = 0; i < 22; i++) {
    cb.fillRect(x, y, 20, 20);
    cb.strokeRect(x, y, 20, 20);
    y = y + 20;
  }

  //下壁を描く
  x = 0;
  y = 420;

  for (i = 0; i < 22; i++) {
    cb.fillRect(x, y, 20, 20);
    cb.strokeRect(x, y, 20, 20);
    x = x + 20;
  }
}
