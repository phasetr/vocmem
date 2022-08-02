export const physExprData = {"data":[{"title":"ルベーグ積分","expression":"\\int_{\\Omega} f(x) \\, d \\mu(x).","commentary":"一般的な測度による全空間積分."},
{"title":"量子ビットのブロッホ球表示","expression":"\\ket{\\psi} = e^{i \\delta} \\rbk{\\cos \\frac{\\theta}{2} \\ket{\\uparrow} + \\sin \\frac{\\theta}{2} e^{i \\phi} \\ket{\\downarrow}}.","commentary":"量子ビットの状態を半径1の単位球面上の点として表したモデル."},
{"title":"ローレンツ変換","expression":"\\begin{aligned}x' &= \\frac{x-vt}{\\sqrt{1 - \\frac{v^2}{c^2}}}, \\\\ y' &= y, \\\\ z' &= z, \\\\ t' &= \\frac{ct- \\frac{v}{c}x}{\\sqrt{1 - \\frac{v^2}{c^2}}}.\\end{aligned}","commentary":"四次元時空座標の変換."},
{"title":"アインシュタインの公式","expression":"E=mc^2.","commentary":"誰もが知る質量とエネルギーの等価性."},
{"title":"時空の計量","expression":"\\begin{aligned}c^2 d \\tau^2 &= \\sum_{\\mu,\\nu=1}^4 g_{\\mu,\\nu}(x) dx^{\\mu} dx^{\\nu} \\\\ &= g_{\\mu,\\nu}(x) dx^{\\mu} dx^{\\nu}.\\end{aligned}","commentary":"一般相対性理論での基本的な概念."},
{"title":"測地線の方程式","expression":"\\begin{aligned}\\frac{d^2 x^{\\mu}}{d \\tau^2} + \\Gamma^{\\mu}_{\\nu \\sigma} \\frac{dx^{\\nu}}{d \\tau} \\frac{dx^{\\sigma}}{d \\tau} = 0.\\end{aligned}","commentary":"一般相対性理論での自由落下を記述する方程式. 一般論は微分幾何で."},
{"title":"アインシュタイン方程式","expression":"\\begin{aligned}R^{\\mu \\nu}(x) - \\frac{1}{2}R(x) g^{\\mu \\nu}(x) = \\kappa T^{\\mu \\nu}(x).\\end{aligned}","commentary":"計量テンソルの決定方程式."},
{"title":"シュワルツシルト計量","expression":"\\begin{aligned}c^2 d\\tau^2 = \\rbk{1 - \\frac{2GM}{c^2 r}} c^2 dt^2 - \\frac{1}{1 - \\frac{2GM}{c^2r}} dr^2 - r^2 (d \\theta^2 + \\sin^2 \\theta d \\phi^2).\\end{aligned}","commentary":"球対称で静的な質量分布の外部にある重力場を記述するアインシュタイン方程式の解. ブラックホールを記述できる."},
{"title":"運動方程式","expression":"\\begin{aligned}m \\frac{d^2 \\vectorr}{dt^2} = \\vectorF.\\end{aligned}","commentary":"高校以来のニュートンの運動方程式."},
{"title":"ハミルトンの最小作用の原理","expression":"\\begin{aligned}\\delta \\int_{t_i}^{t_f} L \\rbk{q(t), \\dot{q}(t), t} \\dt = 0.\\end{aligned}","commentary":"変分法の原点の一つ."},
{"title":"オイラー・ラグランジュ方程式","expression":"\\begin{aligned}\\frac{d}{dt} \\frac{\\partial L}{\\partial \\dot{q}^k} - \\frac{\\partial L}{\\partial q^k} = 0.\\end{aligned}","commentary":"最小作用の原理にしたがう経路がみたす微分方程式."},
{"title":"ハミルトンの正準方程式","expression":"\\begin{align}\\frac{dq^k}{dt}&=\\frac{\\partial H(q,p,t)}{\\partial p_k}, \\\\ \\frac{dp_k}{dt}&=-\\frac{\\partial H(q,p,t)}{\\partial q^k}.\\end{align}","commentary":"二階の運動方程式が一階の微分方程式系に書き換わっている. 詳しくは解析力学で."},
{"title":"ハミルトン-ヤコビ方程式","expression":"\\begin{align}\\frac{\\partial S}{\\partial t} + H \\rbk{q, \\frac{\\partial S}{\\partial q},t} = 0.\\end{align}","commentary":"ニュートンの運動方程式やオイラー・ラグランジュ方程式と等価な, 力学を支配する方程式."}]}
