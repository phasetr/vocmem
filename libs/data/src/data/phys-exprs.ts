export const physExprData = {"data":[{"title":"量子ビットのブロッホ球表示","expression":"\\ket{\\psi} = e^{i \\delta} \\rbk{\\cos \\frac{\\theta}{2} \\ket{\\uparrow} + \\sin \\frac{\\theta}{2} e^{i \\phi} \\ket{\\downarrow}}.","commentary":"量子ビットの状態を半径1の単位球面上の点として表したモデル."},
{"title":"CHSH不等式","expression":"\\begin{aligned}-2 \\leq \\physmean{\\sigma_{yA} \\sigma_{y'B}} - \\physmean{\\sigma_{yA} \\sigma_{z'B}} + \\physmean{\\sigma_{zA} \\sigma_{y'B}} + \\physmean{\\sigma_{zA} \\sigma_{z'B}} \\leq 2.\\end{aligned}","commentary":"ベルの不等式の一形態. Clause, Horne, Shimony, Holtらによる."},
{"title":"チレルソン不等式","expression":"\\begin{aligned}-2 \\sqrt{2} \\leq \\physmean{\\sigma_{yA} \\sigma_{y'B}} - \\physmean{\\sigma_{yA} \\sigma_{z'B}} + \\physmean{\\sigma_{zA} \\sigma_{y'B}} + \\physmean{\\sigma_{zA} \\sigma_{z'B}} \\leq 2 \\sqrt{2}. \\end{aligned}","commentary":"量子限界を表す不等式の一つ. チレルソン限界ともいう."},
{"title":"パウリ行列","expression":"\\begin{aligned}\\sigma_x = \\begin{pmatrix}0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\quad\\sigma_y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}, \\quad\\sigma_z = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}. \\end{aligned}","commentary":"電子のスピンを表す行列. 自己共役かつユニタリでいろいろな関係式をみたす."},
{"title":"パウリ行列の交換関係","expression":"\\begin{aligned}\\sqbk{\\frac{\\sigma_x}{2}, \\frac{\\sigma_y}{2}} = i \\frac{\\sigma_z}{2}, \\quad \\sqbk{\\frac{\\sigma_y}{2}, \\frac{\\sigma_z}{2}} = i \\frac{\\sigma_x}{2}, \\quad \\sqbk{\\frac{\\sigma_z}{2}, \\frac{\\sigma_x}{2}} = i \\frac{\\sigma_y}{2}.\\end{aligned}","commentary":"直接計算による."},
{"title":"スピン角運動量作用素","expression":"\\begin{gather}S_a = \\frac{\\hbar}{2} \\sigma_a, \\\\ \\sqbk{S_x,S_y} = i \\hbar S_z, \\quad \\sqbk{S_y,S_z} = i \\hbar S_x, \\quad \\sqbk{S_z,S_x} = i \\hbar S_y.\\end{gather}","commentary":"パウリ行列を使って定義する. 係数を除いてパウリ行列と同じ交換関係をみたす."},
{"title":"角運動量作用素","expression":"\\begin{aligned}\\sqbk{J_x,J_y} = i \\hbar J_z, \\quad \\sqbk{J_y,J_z} = i \\hbar J_x, \\quad \\sqbk{J_z,J_x} = i \\hbar J_y.\\end{aligned}","commentary":"抽象的な角運動量作用素."},
{"title":"全角運動量作用素","expression":"\\begin{aligned}J^2 &= J_x^2 + J_y^2 + J_z^2, \\\\ \\sqbk{J_a, J^2} &= 0, \\\\ J^2 \\ket{j,m} &= j(j+1) \\hbar^2 \\ket{j,m}, \\\\ J_z \\ket{j,m} &= m \\hbar \\ket{j,m}.\\end{aligned}","commentary":"全角運動量作用素とz成分の同時固有値・固有ベクトルが重要."},
{"title":"角運動量作用素の昇降作用素","expression":"\\begin{gather}J_{\\pm} = J_x \\pm i J_y, \\\\ \\sqbk{J_z, J_{+}} = \\hbar J_{+}, \\quad \\sqbk{J_z, J_{-}} = - \\hbar J_{-}, \\\\ J_{\\pm} J_{\\mp} = J^2 - J_z^2 \\pm \\hbar J_z, \\\\ J_{\\pm} \\ket{j,m} = \\sqrt{j(j+1) - m(m \\pm 1)} \\hbar \\ket{j,m \\pm 1}.\\end{gather}","commentary":"角運動量の昇降作用素に対するいくつかの基本的な関係式."},
{"title":"N準位系のブロッホ表現","expression":"\\begin{aligned}\\rho = \\frac{1}{N} \\rbk{1 + \\sum_{n=1}^{N^2-1} \\physmean{\\lambda_n} \\lambda_n}. \\end{aligned}","commentary":"この密度行列は量子トモグラフィ, つまりラムダに対する実験データから決められる."},
{"title":"ボルン則","expression":"\\begin{aligned}p(\\Lambda = \\lambda) = \\Tr{\\rho P(\\lambda)}.\\end{aligned}","commentary":"ある値が観測される確率の定式化."},
{"title":"合成系でのボルン則","expression":"\\begin{aligned}p \\rbk{\\sigma_A=s, \\sigma_B=s'} = \\TrSuff{AB}{\\rho_{AB} \\rbk{P_A(s) \\otimes P_B(s')}}.\\end{aligned}","commentary":"合成系の密度演算子から物理量の確率分布が与えられる."},
{"title":"合成系の分離可能状態","expression":"\\begin{aligned} \\rho_{AB} = \\sum_{\\mu} p_\\mu \\rho_A(\\mu) \\otimes \\rho_B(\\mu). \\end{aligned}","commentary":"直積状態の凸結合を分離可能状態と呼ぶ."},
{"title":"二準位スピン系のベル状態の例","expression":"\\begin{aligned}\\ket{\\Phi_{-}}_{AB} = \\frac{1}{\\sqrt{2}} \\rbk{\\ket{+}_A \\ket{-}_B - \\ket{-}_A \\ket{+}_B}.\\end{aligned}","commentary":"二準位系での最大量子もつれ状態の一つ."},
{"title":"エンタングルメントエントロピー","expression":"\\begin{aligned}S_{EE}(A \\colon B) &= - \\sum_{n=1}^{N_A} p_n \\log p_n \\\\ &= - \\TrSuff{A}{\\rho_A \\log \\rho_A} \\\\ &= - \\TrSuff{B}{\\rho_B \\log \\rho_B}.\\end{aligned}","commentary":"後半の式はフォン・ノイマンエントロピーと呼ばれる."},
{"title":"TPCP写像","expression":"\\begin{aligned}\\rbk{\\Gamma \\otimes \\id} \\rbk{\\rho_{SA}} \\geq 0, \\quad \\Trace_{SA} \\circ \\rbk{\\Gamma \\otimes \\id} = \\Trace_{SA}.\\end{aligned}","commentary":"トレース保存完全正値写像の略. 第一式がトレース保存, 第二式が完全正値性を表す. あくまで数学的な概念で物理特有の数学的対象ではない."},
{"title":"シュタインスプリング表現","expression":"\\begin{aligned}\\Gamma \\sqbk{\\rho} = \\TrSuff{A}{U_{SA} \\rbk{\\rho \\otimes \\ket{0} \\bra{0}} \\adjoint{U_{SA}}}.\\end{aligned}","commentary":"あらゆる物理操作はアフィン性・トレース保存性・完全正値性を持つCPTP写像で記述される. 対象系S上のCPTP写像に対して上式をみたす補助系Aと合成系SA上のユニタリ作用素が存在する."},
{"title":"クラウス表現","expression":"\\begin{aligned}\\Gamma \\sqbk{\\rho} = \\sum_{\\alpha} K_{\\alpha} \\rho_\\alpha \\adjoint{K_{\\alpha}}, \\quad \\sum_{\\alpha} \\adjoint{K_\\alpha} K_{\\alpha} = 1.\\end{aligned}","commentary":"TPCP写像の別表現."},
{"title":"時間順序積","expression":"\\begin{aligned}\\mathrm{T} \\myexp{\\int_0^t A(s) \\ds} = 1 + \\sum_{n=1}^{\\infty} \\int_0^{t} \\dt_1 \\int_{0}^{t_1} \\dt_2 \\cdots \\int_{0}^{t_{n-1}} A(t_1) \\cdots A(t_n) \\dt_n.\\end{aligned}","commentary":"時間に依存した行列値写像を生成子とした時間発展を記述する."},
{"title":"基底エネルギー","expression":"\\begin{aligned}E_0(H) = \\inf \\spectrum{H}.\\end{aligned}","commentary":"ハミルトニアンのスペクトルの下限を基底エネルギーと呼ぶ."},
{"title":"対称性と保存則","expression":"\\begin{aligned}\\sqbk{H,Q} = 0.\\end{aligned}","commentary":"保存則の生成子とハミルトニアンは交換する."},
{"title":"測定作用素","expression":"\\begin{aligned}M(m) = \\bra{m}_D U_{SD} \\ket{0}_D.\\end{aligned}","commentary":"量子測定の理論で現れる."},
{"title":"ロバートソンの不等式","expression":"\\begin{aligned}\\Delta A \\Delta B \\geq \\frac{1}{2} \\abs{\\Tr{\\rho \\sqbk{A,B}}}.\\end{aligned}","commentary":"不確定性関係を表す不等式の一つ."},
{"title":"小澤の不等式","expression":"\\begin{aligned}\\ep(A) \\eta(B) + \\ep(A) \\Delta B + \\Delta A \\eta(B) \\geq \\frac{1}{2} \\abs{\\Tr{\\rho \\sqbk{A,B}}}.\\end{aligned}","commentary":"アインシュタイン-ポドルスキー-ローゼン(EPR)による有名な議論への反証に使われたことで有名."},
{"title":"生成・消滅作用素","expression":"\\begin{aligned}\\adjoint{a} \\ket{n} &= \\sqrt{n+1} \\ket{n+1}, \\\\ a \\ket{n} &= \\sqrt{n} \\ket{n-1}, \\\\ \\sqbk{a, \\adjoint{a}} &= 1, \\\\ \\ket{n} &= \\frac{1}{\\sqrt{n!}} \\rbk{\\adjoint{a}}^n \\ket{0}.\\end{aligned}","commentary":"量子力学ではエネルギー準位に対応する固有状態の操作にあたる."},
{"title":"個数作用素","expression":"\\begin{aligned}N &= \\adjoint{a}a, \\\\ N \\ket{n} &= n \\ket{n}.\\end{aligned}","commentary":"場の量子論の数学的処理でも基本的な役割を果たす."},
{"title":"正準交換関係","expression":"\\begin{aligned}\\sqbk{x_k,p_l} = x_k p_l - p_l x_k = i \\hbar \\delta_{kl}.\\end{aligned}","commentary":"量子力学的粒子の位置・運動量に対応する演算子の代数的な関係."},
{"title":"ディラックのデルタ関数","expression":"\\begin{aligned}\\int_{\\bbRd} f(x) \\delta(x - x_0) \\dx = f(x_0).\\end{aligned}","commentary":"量子力学にかかわらず物理でよく使われる."},
{"title":"抽象的なシュレディンガー方程式","expression":"\\begin{aligned}i \\hbar \\frac{\\partial \\psi}{\\partial t} = H \\psi.\\end{aligned}","commentary":"一般的なハミルトニアンに対するシュレディンガー方程式."},
{"title":"一体問題のシュレディンガー方程式","expression":"\\begin{aligned}i \\hbar \\frac{\\partial}{\\partial t} \\psi(\\vectorr,t) = - \\frac{\\hbar^2}{2m} \\mylaplacian \\psi(\\vectorr,t) + V(\\vectorr,t) \\psi(\\vectorr,t).\\end{aligned}","commentary":"あるポテンシャルの支配下にある粒子のシュレディンガー方程式."},
{"title":"ハイゼンベルク方程式","expression":"\\begin{aligned}i \\hbar \\frac{d x_k(t)}{dt} &= \\sqbk{x_k(t),H}, \\\\i \\hbar \\frac{d p_k(t)}{dt} &= \\sqbk{p_k(t),H}.\\end{aligned}","commentary":"演算子が時間発展すると考えたときの基本方程式. 場の量子論でよく使われる."},
{"title":"クライン-ゴルドン方程式","expression":"\\begin{aligned}- \\hbar^2 \\frac{\\partial^2 \\psi}{\\partial t^2} = - \\hbar^2 c^2 \\mylaplacian \\psi + m^2 c^2 \\psi.\\end{aligned}","commentary":"相対性理論的な量子力学的粒子の基本方程式として考案された. 形式的に同じ形の場の量子論版がある."},
{"title":"ディラック方程式","expression":"\\begin{aligned}i \\hbar \\frac{\\partial \\psi}{\\partial t} = i \\hbar c \\vectoralpha \\cdot \\nabla \\psi - mc^2 \\beta \\psi.\\end{aligned}","commentary":"クライン-ゴルドン方程式の問題を避けるべく同方程式を因数分解して得られた方程式. 形式的に同じ形の場の量子論版がある."},
{"title":"調和振動子のハミルトニアンとエネルギー固有値","expression":"\\begin{aligned}H &= \\frac{\\hbar \\omega}{2} (\\adjoint{a}a + a \\adjoint{a}) = \\hbar \\omega \\rbk{\\adjoint{a}a + \\frac{1}{2}} \\\\ &= \\frac{1}{2m} p^2 + \\frac{m \\omega^2}{2} x^2, \\\\ E &= \\hbar \\omega \\rbk{n + \\frac{1}{2}}.\\end{aligned}","commentary":"生成・消滅作用素表記と位置・運動量作用素両方の表記を掲載."},
{"title":"調和振動子のシュレディンガー方程式","expression":"\\begin{aligned}i \\hbar \\frac{\\partial}{\\partial t} \\ket{\\psi(t)} = \\rbk{\\frac{1}{2m} p^2 + \\frac{m \\omega^2}{2} x^2} \\ket{\\psi(t)}.\\end{aligned}","commentary":"ハミルトニアンを調和振動子にしたシュレディンガー方程式."},
{"title":"調和振動子の伝播関数","expression":"\\begin{gather}i \\hbar \\frac{\\partial}{\\partial t} K(t;x,y) = \\rbk{- \\frac{\\hbar^2}{2m} \\frac{\\partial^2}{\\partial x^2} + \\frac{m \\omega^2}{2} x^2} K(t; x,y), \\\\ K(t; x,y) = \\sqrt{\\frac{m \\omega}{\\twopii \\hbar \\sin \\omega t}} \\myexp{\\frac{i m \\omega}{2 \\hbar \\sin \\omega t} \\rbk{\\rbk{x^2+ y^2} \\cos \\omega t + xy}}\\end{gather}","commentary":"伝播関数はさらに一般的に定義でき, 場の量子論の計算でも重要."},
{"title":"自由粒子のシュレディンガー方程式","expression":"\\begin{aligned}i \\hbar \\frac{\\partial}{\\partial t} \\psi(\\vectorr, t) = - \\frac{\\hbar^2}{2m} \\mylaplacian \\psi(\\vectorr, t).\\end{aligned}","commentary":"ハミルトニアンを自由粒子にしたシュレディンガー方程式."},
{"title":"自由粒子の伝播関数","expression":"\\begin{aligned}K_0(t;x,y) = \\sqrt{\\frac{m} {\\twopii \\hbar t}} \\myexp{\\frac{i m}{2 \\hbar t} \\rbk{x - y}^2}\\end{aligned}","commentary":"場の量子論でも基本的で重要な対象."},
{"title":"クレプシュ-ゴルダン係数","expression":"\\begin{aligned}\\ket{J,M} = \\sum_{m=-l}^l \\sum_{s_z = -s}^s C_{m s_z}^{JM} \\ket{l,m} \\ket{s,s_z}.\\end{aligned}","commentary":"スピン系の角運動量の合成に関わる展開係数."},
{"title":"$J=0$をみたす二準位スピンの一重項状態","expression":"\\begin{aligned}\\ket{\\Phi_{-}}_{AB} = \\frac{\\ket{+-} - \\ket{-+}} {\\sqrt{2}}.\\end{aligned}","commentary":"J=0の空間回転の既約表現でもある."},
{"title":"二準位スピンの三重項状態","expression":"\\begin{aligned}\\ket{\\Phi_{+}}_{AB} = \\frac{\\ket{+-} + \\ket{-+}}{\\sqrt{2}}.\\end{aligned}","commentary":"$J=1$をみたす空間回転の規約表現でもある."},
{"title":"軌道角運動量作用素","expression":"\\begin{aligned}L_x = yp_z - zp_y, \\quad L_y = zp_x - xp_z, \\quad L_z = xp_y - yp_x.\\end{aligned}","commentary":"古典力学の角運動量を素直に量子化した."},
{"title":"軌道角運動量作用素のもとでの球面調和関数","expression":"\\begin{aligned}\\begin{cases}L^2 Y_{lm} &= l(l+1) \\hbar^2 Y_{lm}, \\\\ L_z Y_{lm} &= m \\hbar Y_{lm}, \\end{cases}\\quad l \\in \\bbN, \\quad m = -l,-l+1, \\cdots, l-1,l.\\end{aligned}","commentary":"角運動量の議論の基礎."},
{"title":"球面上のラプラシアンと球面調和関数","expression":"\\begin{aligned}L^2 &= - \\hbar^2 \\mylaplacian_{\\theta \\phi} = - \\hbar^2 \\rbk{\\frac{1}{\\sin \\theta} \\frac{\\partial}{\\partial \\theta} \\sin \\theta \\frac{\\partial}{\\partial \\theta} + \\frac{1}{\\sin^2 \\theta} \\frac{\\partial^2}{\\partial \\phi^2}}, \\\\ L_z &= - i \\hbar \\frac{\\partial}{\\partial \\phi}.\\end{aligned}","commentary":"球対称なハミルトニアンの研究の基礎."},
{"title":"場の変分原理","expression":"\\begin{gather}\\delta \\int \\calL \\rbk{\\phi(\\vectorr,t), \\grad \\, \\phi(\\vectorr,t), \\frac{\\partial}{\\partial t} \\phi(\\vectorr,t)} \\opd^3x \\, cdt = 0, \\\\ \\delta \\int \\calL \\rbk{\\phi(x), \\partial \\phi(x)} \\opd^4x = 0.\\end{gather}","commentary":"相対性理論的な場の変分原理. 第二式は省略記法."},
{"title":"場の方程式","expression":"\\begin{aligned}\\frac{\\partial \\calL}{\\partial \\phi} - \\frac{\\partial}{\\partial t} \\frac{\\partial \\calL}{\\partial \\frac{\\partial \\phi}{\\partial t}} - \\divergence \\frac{\\partial \\calL}{\\partial (\\grad \\, \\phi)} = 0.\\end{aligned}","commentary":"場の変分原理から得られる場の運動方程式."},
{"title":"場の交換関係・反交換関係","expression":"\\begin{aligned}[\\phi(\\vectorx,t), \\adjoint{\\phi}(\\vectory,t)] &= \\phi(\\vectorx,t) \\adjoint{\\phi}(\\vectory,t)- \\adjoint{\\phi}(\\vectory,t) \\phi(\\vectorx,t) \\\\ &= \\hbar \\delta(\\vectorx - \\vectory), \\\\ [\\psi(\\vectorx, t), \\adjoint{\\psi}(\\vectory,t)] &= \\psi(\\vectorx,t) \\adjoint{\\psi}(\\vectory,t) - \\adjoint{\\psi}(\\vectory,t) \\psi(\\vectorx,t) \\\\ &= \\hbar \\delta(\\vectorx - \\vectory).\\end{aligned}","commentary":"同時刻での場の交換関係・反交換関係."},
{"title":"ワインバーグ-サラム理論のラグランジアン密度","expression":"\\begin{aligned}\\calL_{WS} &= - \\frac{1}{4} F_{\\mu\\nu} F^{\\mu\\nu} - \\frac{1}{4} G_{\\mu\\nu} G^{\\mu\\nu} \\\\ &\\quad + \\conj{\\ell_e} i \\gamma^\\mu \\rbk{\\partial_\\mu + i g \\vectorW_{\\mu} \\cdot \\vectort + \\frac{i}{2} g'yB_\\mu} \\ell_e.\\end{aligned}","commentary":"電磁相互作用を弱い相互作用を含むように拡張したラグランジアン密度."},
{"title":"ヒッグス粒子のラグランジアン密度","expression":"\\begin{aligned}\\calL_H = \\frac{1}{2} (gv)^2 W_\\mu^{+} W^{-\\mu} + \\frac{1}{4} v^2 (g W_{\\mu}^3 - g' B_\\mu)^2.\\end{aligned}","commentary":"ワインバーグ-サラム理論のラグランジアン密度を変数変換で変換して導かれた場が記述するヒッグス粒子の方程式を求めるためのラグランジアン密度."},
{"title":"小林-益川理論のクォーク世代間混合式","expression":"\\begin{aligned}\\begin{pmatrix}d' \\\\ s' \\\\ b'\\end{pmatrix} = \\begin{pmatrix}c_1 & s_1 c_2 & s_1 s_2 \\\\  -s_1 c_3 & c_1c_2c_3 - s_2 s_3 e^{-i \\delta} & c_1s_2c_3 + c_2s_3 e^{-i \\delta} \\\\ -s_1 s_3 & c_1c_2s_3 + s_2 c_3 e^{-i \\delta} & c_1s_2s_3 - c_2c_3 e^{-i \\delta}\\end{pmatrix} \\begin{pmatrix}d \\\\ s \\\\ b\\end{pmatrix}.\\end{aligned}","commentary":"弱い相互作用の時間反転対称性の破れを説明する小林-益川理論の相互作用を規定する."},
{"title":"繰り込み群の方程式","expression":"\\begin{aligned}x \\frac{\\partial}{\\partial x} G(x,g) - \\beta(g) \\frac{\\partial}{\\partial g} G(x,g) = 0.\\end{aligned}","commentary":"パラメーターとしての質量定数や相互作用定数を変化させた場の量の不変性を表す."},
{"title":"ワインバーグ-サラム理論でのワインバーグ角","expression":"\\begin{aligned}\\sin^2 \\theta_W = \\frac{3}{8} \\rbk{1 - \\frac{\\alpha}{4 \\pi} \\frac{110}{9} \\log \\frac{M_X^2}{Q^2}}.\\end{aligned}","commentary":"荷電中間ゲージ場の相互作用定数をまとめた角度パラメーター."},
{"title":"宇宙物理・天文学でのミンコフスキー計量","expression":"\\begin{aligned}ds^2 = -(cdt)^2 + (dx)^2 + (dy)^2 + (dz)^2.\\end{aligned}","commentary":"宇宙物理・天文学と素粒子・高エネルギー物理で慣習が違う."},
{"title":"宇宙物理・天文学でのミンコフスキー計量テンソル","expression":"\\begin{aligned}&g^{00} = 1, \\quad g^{11} = g^{22} = g^{33} = -1, \\quad (\\text{otherwise} = 0), \\\\ &g = \\begin{pmatrix} 1 &  0 &  0 &  0 \\\\ 0 & -1 &  0 &  0 \\\\ 0 &  0 & -1 &  0 \\\\ 0 &  0 &  0 & -1\\end{pmatrix}.\\end{aligned}","commentary":"一般の時空の計量を区別するためにミンコフスキー計量は$\\eta$を使う場合がある."},
{"title":"素粒子・高エネルギー物理でのミンコフスキー計量","expression":"\\begin{aligned}ds^2 = (cdt)^2 - (dx)^2 - (dy)^2 - (dz)^2.\\end{aligned}","commentary":"宇宙物理・天文学と素粒子・高エネルギー物理で慣習が違う."},
{"title":"素粒子・高エネルギー物理でのミンコフスキー計量テンソル","expression":"\\begin{aligned}&g^{00} = -1, \\quad g^{11} = g^{22} = g^{33} = 1, \\quad (\\text{otherwise} = 0), \\\\ &g = \\begin{pmatrix} -1 &  0 &  0 &  0 \\\\ 0 & 1 &  0 &  0 \\\\ 0 &  0 & 1 &  0 \\\\ 0 &  0 &  0 & 1\\end{pmatrix}.\\end{aligned}","commentary":"一般の時空の計量を区別するためにミンコフスキー計量は$\\eta$を使う場合がある."},
{"title":"真空中の光速","expression":"\\begin{aligned}c = 299,792,458 \\, \\mathrm{m/s} \\simeq 3 \\times 10^8 \\, \\mathrm{m/s}.\\end{aligned}","commentary":"2022/8時点では定義値."},
{"title":"四元ベクトル","expression":"\\begin{aligned}dx^{\\mu} \\colon dx^0 = cdt, \\quad dx^1 = dx, \\quad dx^2 = dy, \\quad dx^3 = dz.\\end{aligned}","commentary":"現代では標準的."},
{"title":"ミンコフスキー計量による世界間隔の表示","expression":"\\begin{aligned}ds^2 = g_{\\mu \\nu} dx^{\\mu} dx^{\\nu}.\\end{aligned}","commentary":"アインシュタインの規約を使っている."},
{"title":"各軸まわりの三次元空間回転を表す行列","expression":"\\begin{aligned}R_x(\\theta) &= \\begin{pmatrix}1 & 0 & 0 \\\\ 0 & \\cos\\theta & \\sin\\theta \\\\ 0 & -\\sin\\theta & \\cos\\theta\\end{pmatrix}, \\\\ R_y(\\theta) &= \\begin{pmatrix}\\cos\\theta & 0 & -\\sin\\theta \\\\ 0 & 1 & 0 \\\\ \\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}, \\\\ R_z(\\theta) &= \\begin{pmatrix}\\cos\\theta & \\sin\\theta & 0 \\\\ - \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1\\end{pmatrix}, \\\\ R_x(\\theta) &= R_z \\rbkfrac{\\pi}{2} R_y(\\theta) R_z \\rbkfrac{-\\pi}{2}.\\end{aligned}","commentary":"最後の式によって三つの回転は独立ではない."},
{"title":"ある三次元ベクトルを軸とした回転行列","expression":"\\begin{aligned}\\vectorn &= (\\sin\\theta \\cos\\phi, \\sin\\theta \\sin\\phi, \\cos\\theta), \\\\ R_{\\vectorn} &= R_y(\\theta) R_z(\\phi), \\\\ R_{\\vectorn} (\\Theta) &= \\inv{R_{\\vectorn}} R_z(\\Theta) R_{\\vectorn}.\\end{aligned}","commentary":"一度方向ベクトルを$z$軸に向けておき, それを$z$軸周りに回転させてさらに戻す."},
{"title":"ローレンツ変換の定義","expression":"\\begin{aligned}\\transpose{\\Lambda} g \\Lambda = g.\\end{aligned}","commentary":"この$g$はミンコフスキー計量."},
{"title":"よく見かけるローレンツ変換","expression":"\\begin{aligned}x' &= \\frac{x-vt}{\\sqrt{1 - \\frac{v^2}{c^2}}}, \\\\ y' &= y, \\\\ z' &= z, \\\\ t' &= \\frac{ct- \\frac{v}{c}x}{\\sqrt{1 - \\frac{v^2}{c^2}}}.\\end{aligned}","commentary":"四次元時空座標の変換."},
{"title":"$x$軸方向へのローレンツブースト","expression":"\\begin{aligned}ct' &= \\gamma (ct + \\beta x), \\quad dx' = \\gamma (dx + \\beta \\, ct), \\\\ ct  &= \\gamma (ct'- \\beta x'), \\quad dx = \\gamma (dx' - \\beta \\, ct'), \\\\ \\Lambda &= \\begin{pmatrix} \\gamma & \\gamma \\beta & 0 & 0 \\\\ \\gamma \\beta & \\gamma & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1\\end{pmatrix}, \\quad \\gamma = \\frac{1}{\\sqrt{1-\\beta^2}}, \\quad \\beta = \\frac{v}{c}.\\end{aligned}","commentary":"基本的で有名な式."},
{"title":"相対論的な速度の合成則","expression":"\\begin{aligned}v_2 = \\frac{v_1+v}{1 + \\frac{vv_1}{c^2}}.\\end{aligned}","commentary":"$c \\to \\infty$で非相対論的な速度の合成則が復元できる."},
{"title":"ローレンツ収縮","expression":"\\begin{align}l = l_0 \\sqrt{1 - \\beta^2}, \\quad \\beta = \\frac{v}{c}.\\end{align}","commentary":"慣性系$I$に対して相対速度$v$で動く慣性系$I'$で長さ$l_0$の棒を$I$で観測したときの棒の長さ."},
{"title":"時間の遅れ: 双子のパラドクス","expression":"\\begin{align}c \\Delta t' = c \\Delta t \\sqrt{1 - \\beta^2}, \\quad \\beta = \\frac{v}{c}.\\end{align}","commentary":"地球$I$に対して相対速度$v$で動くロケット$I'$で固定された時計の挙動."},
{"title":"青方偏移","expression":"\\begin{align}\\omega' = \\omega \\sqrt{\\frac{1 + \\beta}{1 - \\beta}}, \\quad \\lambda' = \\lambda \\sqrt{\\frac{1-\\beta}{1+\\beta}}.\\end{align}","commentary":"光源$I$が速度$v$で近付いてくるときの$I'$での振動数と波長."},
{"title":"赤方偏移","expression":"\\begin{align}\\omega' = \\omega \\sqrt{\\frac{1 - \\abs{\\beta}}{1 + \\abs{\\beta}}}, \\quad \\lambda' = \\lambda \\sqrt{\\frac{1+\\abs{\\beta}}{1-\\abs{\\beta}}}.\\end{align}","commentary":"光源$I$が速度$v$で近付いてくるときの$I'$での振動数と波長."},
{"title":"ローレンツブーストに対応する行列","expression":"\\begin{align}\\Lambda_x &= e^{\\eta_x K_x} = \\begin{pmatrix}\\cosh\\eta_x & \\sinh\\eta_x & 0 & 0 \\\\ \\sinh\\eta_x & \\cosh\\eta_x & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ \\end{pmatrix}, & K_x &= \\begin{pmatrix}0 & 1 & 0 & 0 \\\\ 1 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}, \\\\ \\Lambda_y &= e^{\\eta_y K_y} = \\begin{pmatrix}\\cosh\\eta_y & 0 & \\sinh\\eta_y & 0 \\\\0 & 1 & 0 & 0 \\\\ \\sinh\\eta_y & 0 & \\cosh\\eta_y & 0 \\\\0 & 0 & 0 & 1\\end{pmatrix}, & K_y &= \\begin{pmatrix}0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 0 \\\\ 1 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}, \\\\ \\Lambda_z &= e^{\\eta_z K_z} = \\begin{pmatrix}\\cosh\\eta_z & 0 & 0 & \\sinh\\eta_z \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ \\sinh\\eta_z & 0 & 0 & \\cosh\\eta_z\\end{pmatrix}, & K_z &= \\begin{pmatrix}0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 \\\\ 1 & 0 & 0 & 0\\end{pmatrix}.\\end{align}","commentary":"ローレンツ変換とその生成子の組."},
{"title":"一般のローレンツ群の要素","expression":"\\begin{align}\\Lambda_L &= \\exp{\\sum_{a=1}^6 \\Theta_a T_a}, \\\\ \\Theta &= (\\eta_x, \\eta_y, \\eta_z, \\phi_x, \\phi_y, \\phi_z), \\\\ T &= (K_x, K_y, K_z, M_x, M_y, M_z), \\\\ \\omega_\\nu^{\\mu} &= \\rbk{\\boldsymbol{\\eta} \\cdot K + \\boldsymbol{\\phi} \\cdot M}^{\\mu}_{\\nu} = \\begin{pmatrix} 0 & \\eta_x & \\eta_y & \\eta_z \\\\ \\eta_x & 0 & \\phi_z & - \\phi_y \\\\ \\eta_y & - \\phi_z & 0 & \\phi_x \\\\ \\eta_z & \\phi_y & - \\phi_x & 0 \\end{pmatrix}.\\end{align}","commentary":"生成子を使った表記."},
{"title":"相対論的な作用とラグランジアン","expression":"\\begin{align}S &= - m_0 c \\int_{s_a}^{s_b} ds = - m_0 c^2 \\int_{t_a}^{t_b} \\sqrt{1 - \\frac{\\dot{\\vectorr}^2}{c^2}}, \\\\ L &= -m_0 c^2 \\sqrt{1 - \\frac{\\dot{\\vectorr}^2}{c^2}}.\\end{align}","commentary":"計量は$ds^2 = (cdt)^2 - (dx)^2 - (dy)^2 - (dz)^2$."},
{"title":"相対論的な正準運動量","expression":"\\begin{align}\\vectorp = \\frac{\\partial L}{\\partial \\dot{\\vectorr}} = \\frac{m_0 \\dot{\\vectorr}}{\\sqrt{1 - \\frac{\\dot{\\vectorr}^2}{c^2}}}.\\end{align}","commentary":"定義にもとづいた計算."},
{"title":"相対論的なハミルトニアン","expression":"\\begin{align}H = \\vectorp \\cdot \\dot{\\vectorr} - L = c \\sqrt{\\vectorp^2 + m_0^2 c^2}.\\end{align}","commentary":"定義にもとづいて計算."},
{"title":"アインシュタインの公式","expression":"E=mc^2.","commentary":"誰もが知る質量とエネルギーの等価性."},
{"title":"四元エネルギー運動量ベクトル","expression":"\\begin{align}p^{\\mu} = \\rbk{\\frac{E}{c}, \\vectorp} = \\rbk{\\frac{E}{c}, p_x, p_y, p_z}.\\end{align}","commentary":"時間に対応するのがエネルギー."},
{"title":"一般の時空の計量","expression":"\\begin{aligned}c^2 d \\tau^2 &= \\sum_{\\mu,\\nu=1}^4 g_{\\mu,\\nu}(x) dx^{\\mu} dx^{\\nu} \\\\ &= g_{\\mu,\\nu}(x) dx^{\\mu} dx^{\\nu}.\\end{aligned}","commentary":"一般相対性理論での基本的な概念."},
{"title":"測地線の方程式","expression":"\\begin{aligned}\\frac{d^2 x^{\\mu}}{d \\tau^2} + \\Gamma^{\\mu}_{\\nu \\sigma} \\frac{dx^{\\nu}}{d \\tau} \\frac{dx^{\\sigma}}{d \\tau} = 0.\\end{aligned}","commentary":"一般相対性理論での自由落下を記述する方程式. 一般論は微分幾何で."},
{"title":"アインシュタイン方程式","expression":"\\begin{aligned}R^{\\mu \\nu}(x) - \\frac{1}{2}R(x) g^{\\mu \\nu}(x) = \\kappa T^{\\mu \\nu}(x).\\end{aligned}","commentary":"計量テンソルの決定方程式."},
{"title":"シュワルツシルト計量","expression":"\\begin{aligned}c^2 d\\tau^2 = \\rbk{1 - \\frac{2GM}{c^2 r}} c^2 dt^2 - \\frac{1}{1 - \\frac{2GM}{c^2r}} dr^2 - r^2 (d \\theta^2 + \\sin^2 \\theta d \\phi^2).\\end{aligned}","commentary":"球対称で静的な質量分布の外部にある重力場を記述するアインシュタイン方程式の解. ブラックホールを記述できる."},
{"title":"運動方程式","expression":"\\begin{aligned}m \\frac{d^2 \\vectorr}{dt^2} = \\vectorF.\\end{aligned}","commentary":"高校以来のニュートンの運動方程式."},
{"title":"ハミルトンの最小作用の原理","expression":"\\begin{aligned}\\delta \\int_{t_i}^{t_f} L \\rbk{q(t), \\dot{q}(t), t} \\dt = 0.\\end{aligned}","commentary":"変分法の原点の一つ."},
{"title":"オイラー・ラグランジュ方程式","expression":"\\begin{aligned}\\frac{d}{dt} \\frac{\\partial L}{\\partial \\dot{q}^k} - \\frac{\\partial L}{\\partial q^k} = 0.\\end{aligned}","commentary":"最小作用の原理にしたがう経路がみたす微分方程式."},
{"title":"ハミルトンの正準方程式","expression":"\\begin{aligned}\\frac{dq^k}{dt}&=\\frac{\\partial H(q,p,t)}{\\partial p_k}, \\\\ \\frac{dp_k}{dt}&=-\\frac{\\partial H(q,p,t)}{\\partial q^k}.\\end{aligned}","commentary":"二階の運動方程式が一階の微分方程式系に書き換わっている. 詳しくは解析力学で."},
{"title":"ハミルトン-ヤコビ方程式","expression":"\\begin{aligned}\\frac{\\partial S}{\\partial t} + H \\rbk{q, \\frac{\\partial S}{\\partial q}, t} = 0.\\end{aligned}","commentary":"ニュートンの運動方程式やオイラー・ラグランジュ方程式と等価な, 力学を支配する方程式."},
{"title":"マクスウェル方程式","expression":"\\begin{aligned}\\divergence \\vectorE &= \\rho, \\\\ \\divergence \\vectorB &= 0, \\\\ \\rot \\vectorE &= - \\frac{1}{c} \\frac{\\partial \\vectorB}{\\partial t}, \\\\ \\rot \\vectorB &= \\frac{1}{c} \\frac{\\partial \\vectorE}{\\partial t} + \\frac{1}{c} \\vectorj.\\end{aligned}","commentary":"電磁場がなす偏微分方程式系で電磁気学の基礎方程式."},
{"title":"電荷保存則","expression":"\\begin{align}\\frac{\\partial \\rho(x)}{\\partial t} + \\divergence \\vectorJ(x) = 0, \\quad x = (t,\\vectorr).\\end{align}","commentary":"基本的な保存則."},
{"title":"真空中のマクスウェル方程式","expression":"\\begin{align}\\divergence \\vectorE(x) &= 0, \\\\ \\divergence \\vectorB(x) &= 0, \\\\ \\rot \\vectorB(x) - \\frac{1}{c^2} \\frac{\\partial \\vectorE(x)}{\\partial t} &= 0, \\\\ \\rot \\vectorE() + \\frac{\\partial \\vectorB(x)}{\\partial t} &= 0, \\\\ x &= (t, \\vectorr), \\\\ \\frac{1}{\\mu_0 \\ep_0} &= c^2.\\end{align}","commentary":"電荷密度・電流を$0$にしたマクスウェル方程式."},
{"title":"クーロンの法則","expression":"\\begin{align}\\vectorE (\\vectorr) = \\frac{Q}{4 \\pi \\ep_0} \\frac{\\vectorr}{r^3}.\\end{align}","commentary":"高校でも出て来る基本的な式."},
{"title":"クーロンの法則の積分形","expression":"\\begin{align}\\int_{\\partial V} \\vectorE(\\vectorr) \\cdot d \\vectorS = \\int_V \\frac{\\rho(\\vectorr)}{\\ep_0} \\dV.\\end{align}","commentary":"電荷も電荷密度に置き換えている."},
{"title":"ガウスの法則","expression":"\\begin{align}\\divergence \\vectorE(x) = \\frac{\\rho(x)}{\\ep_0}, \\quad \\divergence B(x) = 0, \\quad x = (t, \\vectorr).\\end{align}","commentary":"電場・磁場をまとめて呼んでいる. 電場に対する方程式はクーロンの法則の微分形."},
{"title":"アンペールの法則の積分形","expression":"\\begin{align}\\frac{1}{\\mu_0} \\int_{\\partial S} \\vectorB(\\vectorr) \\cdot d \\vectorl = \\int_S \\vectorJ(\\vectorr) \\cdot d \\vectorS.\\end{align}","commentary":"磁場と電流の関係."},
{"title":"アンペールの法則","expression":"\\begin{align}\\frac{1}{\\mu_0} \\rot \\vectorB(x) - \\ep_0 \\frac{\\partial \\vectorE(x)}{\\partial t} = \\vectorJ(x), \\quad x = (t, \\vectorr).\\end{align}","commentary":"いわゆる変位電流の項が入っている."},
{"title":"ファラデーの法則の積分形","expression":"\\begin{align}- \\frac{d}{dt} \\int_S \\vectorB(t, \\vectorr) \\cdot d \\vectorS = \\int_{\\partial S} \\vectorE(t,\\vectorr) \\cdot d \\vectorl.\\end{align}","commentary":"電場と磁場の関係."},
{"title":"ファラデーの法則の微分形","expression":"\\begin{align}- \\frac{\\partial \\vectorB(x)}{\\partial t} = \\rot \\vectorE(x), \\quad x = (t, \\vectorr).\\end{align}","commentary":"ベクトル解析を使って変換する."},
{"title":"電磁場中を運動する荷電粒子の運動方程式","expression":"\\begin{aligned}m \\frac{d^2 \\vectorr}{dt^2} = e \\vectorE(\\vectorr(t),t) + \\frac{e}{c} \\vectorv \\times \\vectorB(\\vectorr(t),t).\\end{aligned}","commentary":"第一項は電場, 第二項は磁場によるローレンツ力の項."},
{"title":"電磁ポテンシャル","expression":"\\begin{aligned} \\vectorE &= - \\grad \\, \\phi - \\frac{1}{c} \\frac{\\partial \\vectorA}{\\partial t}, \\\\ \\vectorB &= \\rot \\vectorA. \\end{aligned}","commentary":"電場はスカラーポテンシャル(電位)の勾配とベクトルポテンシャルの時間微分の和で書け, 磁場はベクトルポテンシャルの回転で書ける."},
{"title":"電磁ポテンシャルの波動方程式","expression":"\\begin{aligned}\\mylaplacian \\vectorA - \\frac{1}{c^2} \\frac{\\partial^2 \\vectorA}{\\partial t^2} = - \\frac{1}{c} \\vectorj.\\end{aligned}","commentary":"電磁場がみたすマクスウェル方程式に電磁ポテンシャルを代入すれば電磁ポテンシャルは波動方程式をみたす."},
{"title":"ナビエ-ストークス方程式","expression":"\\begin{aligned}\\frac{\\partial \\vectorv}{\\partial t} + \\rbk{\\vectorv \\cdot \\nabla} \\vectorv - \\frac{\\mu}{\\rho} \\mylaplacian \\vectorv = - \\frac{1}{\\rho} \\grad \\, p.\\end{aligned}","commentary":"粘性を考慮した流体の速度場がみたす方程式."},
{"title":"連続の方程式","expression":"\\begin{aligned}\\frac{\\partial \\rho}{\\partial t} + \\grad \\, (\\rho \\vectorv) = 0.\\end{aligned}","commentary":"各点での流体の密度の変化量と速度場が表す速度で流入する流体の量の等価性を表す."},
{"title":"オイラー方程式","expression":"\\begin{aligned}\\frac{\\partial \\vectorv}{\\partial t} + \\rbk{\\vectorv \\cdot \\nabla} \\vectorv = - \\frac{1}{\\rho} \\grad \\, p.\\end{aligned}","commentary":"完全流体(粘性を無視した流体)の速度場に対する運動方程式."},
{"title":"コルトベーク-ド・フリース方程式","expression":"\\begin{aligned}\\frac{\\partial u}{\\partial t} = \\frac{3}{2} u \\frac{\\partial u}{\\partial x} + \\frac{1}{4} \\frac{\\partial^3 u}{\\partial x^3}.\\end{aligned}","commentary":"浅い運河のソリトン波の運動を記述する方程式."},
{"title":"サイン-ゴルドン方程式","expression":"\\begin{aligned}\\frac{\\partial^2 \\phi(x,t)}{\\partial x^2} - \\frac{1}{a^2} \\frac{\\partial^2 \\phi(x,t)}{\\partial t^2} = \\sin \\phi(x,t).\\end{aligned}","commentary":"特殊な結晶中を伝わる光を記述する方程式で非線型項を伴う."},
{"title":"$\\frac{1}{1-x}$のテイラー展開","expression":"\\begin{aligned}\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n = 1 + x + x^2 + \\cdots.\\end{aligned}","commentary":"等比級数の和でもある."},
{"title":"$\\frac{1}{\\sqrt{1-x}}$のテイラー展開","expression":"\\begin{aligned}\\frac{1}{\\sqrt{1-x}} = 1 + \\frac{x}{2} + \\frac{3}{8}x^2 + \\cdots.\\end{aligned}","commentary":"一次近似は高校物理でもよく出てくる."},
{"title":"指数関数の定義","expression":"\\begin{align}e^A = \\sum_{n=0}^\\infty \\frac{1}{n!} e^n = \\lim_{n \\to \\infty} \\rbk{1 + \\frac{A}{n}}^n.\\end{align}","commentary":"適切に調節すれば行列や作用素に対しても同じ定義が使える."},
{"title":"三次元回転の生成子","expression":"\\begin{align}R_x(\\theta) &= e^{\\theta M_x} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & \\sin\\theta \\\\ 0 & -\\sin\\theta & \\cos\\theta\\end{pmatrix}, & M_x &= \\begin{pmatrix}0 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & -1 & 0 \\end{pmatrix} \\\\ R_y(\\theta) &= e^{\\theta M_y} = \\begin{pmatrix}\\cos\\theta & 0 & -\\sin\\theta \\\\ 0 & 1 & 0 \\\\ \\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}, & M_y &= \\begin{pmatrix}0 & 0 & -1 \\\\ 0 & 0 & 0 \\\\ 1 & 0 & 0\\end{pmatrix} \\\\ R_z(\\theta) &= e^{\\theta M_z} = \\begin{pmatrix}\\cos\\theta & \\sin\\theta & 0 \\\\ - \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, & M_z &= \\begin{pmatrix}0 & 1 & 0 \\\\ -1 & 0 & 0 \\\\ 0 & 0 & 0\\end{pmatrix}.\\end{align}","commentary":"行列の指数関数など重要な要素が詰まっている."},
{"title":"作用素の時間発展","expression":"\\begin{align}e^{A}Be^{-A} = \\sum_{n=0}^n \\frac{1}{n!} \\delta_A^n(B), \\quad \\delta_A(B) = [A,B].\\end{align}","commentary":"$A = itH$とすれば作用素の時間発展."},
{"title":"フーリエ変換・逆変換","expression":"\\begin{align}\\hat{f}(k) &= \\frac{1}{(\\twopi)^d} \\int_{\\bbRd} f(x) e^{-ikx} \\dx, \\\\ f(x)       &= \\int_{\\bbRd} \\hat{f}(k) e^{ikx} \\dk, \\\\ \\hat{f}(k) &= \\frac{1}{(\\twopi)^{d/2}} \\int_{\\bbRd} f(x) e^{-ikx} \\dx, \\\\ f(x)       &= \\frac{1}{(\\twopi)^{d/2}} \\int_{\\bbRd} \\hat{f}(k) e^{ikx} \\dk, \\\\ \\hat{f}(k) &= \\int_{\\bbRd} f(x) e^{-\\twopii kx} \\dx, \\\\ f(x)       &= \\int_{\\bbRd} \\hat{f}(k) e^{\\twopii kx} \\dk. \\end{align}","commentary":"$\\twopi$をどこに入れるかで主に三通りある. どれを選ぶかによってフーリエ変換に関わる諸公式の係数が変わる."}]}