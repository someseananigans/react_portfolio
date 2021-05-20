import './shades.css'
const Shades = () => {
  return (
    <div className="lensWrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <defs>
          <g className="code-block" id="code-block">
            <rect ry="0" y="862" x="60" height="7.5" width="74"></rect>
            <rect ry="0" y="874" x="96" height="7.5" width="28"></rect>
            <rect width="54" height="7.5" x="60" y="886" ry="0"></rect>
            <rect ry="0" y="897" x="60" height="7.5" width="74"></rect>
            <rect width="56" height="7.5" x="78" y="909" ry="0"></rect>
            <rect ry="0" y="921" x="83" height="7.5" width="51"></rect>
            <rect width="51" height="7.5" x="73" y="932" ry="0"></rect>
            <rect ry="0" y="944" x="72" height="7.5" width="62"></rect>
            <rect width="74" height="7.5" x="60" y="956" ry="0"></rect>
            <rect ry="0" y="967" x="50" height="7.5" width="84"></rect>
            <rect width="64" height="7.5" x="60" y="979" ry="0"></rect>
            <rect ry="0" y="991" x="60" height="7.5" width="74"></rect>
            <rect width="41" height="7.5" x="93" y="1003" ry="0"></rect>
            <rect ry="0" y="1014" x="66" height="7.5" width="58"></rect>
            <rect width="58" height="7.5" x="56" y="1026" ry="0"></rect>
            <rect ry="0" y="1038" x="50" height="7.5" width="74"></rect>
            <rect width="46" height="7.5" x="88" y="1049" ry="0"></rect>
            <rect ry="0" y="1061" x="105" height="7.5" width="19"></rect>
            <rect width="38" height="7.5" x="96" y="1073" ry="0"></rect>
            <rect ry="0" y="1084" x="73" height="7.5" width="51"></rect>
            <rect ry="0" y="1096" x="88" height="7.5" width="26"></rect>
            <rect width="56" height="7.5" x="68" y="1108" ry="0"></rect>
            <rect ry="0" y="1120" x="100" height="7.5" width="24"></rect>
            <rect width="74" height="7.5" x="50" y="1131" ry="0"></rect>
          </g>
          <clipPath id="spec-left">
            <path d="M85 860c-10 1-25 1-28 13-3 15-3 32 6 45 7 11 23 9 35 9 19-1 35-16 40-34 2-8 4-14 1-19-6-10-20-12-31-13l-23-1z" fill="#333"></path>
          </clipPath>
          <clipPath id="spec-right">
            <path d="M215 860c10 1 24 1 28 13 3 15 3 32-6 45-7 11-23 9-35 9-19-1-35-16-40-34-2-8-4-14-1-19 6-10 20-12 31-13l23-1z" fill="#333"></path>
          </clipPath>
        </defs>
        <g transform="matrix(1.34105 0 0 1.34105 -51 -1050)">

          <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
            <stop class="gradient__brand-secondary" offset="0" />
            <stop class="gradient__brand" offset="100%" />
          </linearGradient>
          <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient2">
            <stop class="gradient__brand-secondary2" offset="0" />
            <stop class="gradient__brand2" offset="100%" />
          </linearGradient>

          <path className="shades-frame" d="M77 855c-6 0-13 0-23 2l-14 3 2 15 7 2c3 5 1 10 2 18 3 28 12 34 26 35 8 1 23 3 33-1s19-10 25-18c6-9 6-18 10-26 3-5 8-4 10 0 3 8 4 17 10 26 6 8 15 14 24 18 11 4 26 2 34 1 14-1 23-7 26-35 1-8-2-13 2-18l7-2 2-15-15-3c-15-3-23-2-34-2h-13l-25 4c-8 2-15 7-23 6-8 0-15-5-23-6l-25-4H77z"></path>
          <path className="lens" d="M85 860c-10 1-25 1-28 13-3 15-3 32 6 45 7 11 23 9 35 9 19-1 35-16 40-34 2-8 4-14 1-19-6-10-20-12-31-13l-23-1z" fill="url(#gradient2)"></path>
          <path className="shades-dot" d="M56 864a4 2 0 01-4 2 4 2 0 01-4-2 4 2 0 014-1 4 2 0 014 1"></path>
          <path className="lens" d="M215 860c10 1 24 1 28 13 3 15 3 32-6 45-7 11-23 9-35 9-19-1-35-16-40-34-2-8-4-14-1-19 6-10 20-12 31-13l23-1z" fill="#333"></path>
          <path className="shades-dot" d="M244 864a4 2 0 004 2 4 2 0 004-2 4 2 0 00-4-1 4 2 0 00-4 1"></path>
          <g clipPath="url(#spec-left)">
            <use xlinkHref="#code-block" transform="translate(0 0)"></use>
            <use xlinkHref="#code-block" transform="translate(0 0)" y="283.5"></use>
          </g>
          <g clipPath="url(#spec-right)">
            <use xlinkHref="#code-block" transform="translate(104 0)"></use>
            <use xlinkHref="#code-block" transform="translate(104 0)" y="283.5"></use>
          </g>
          <path className="lens__shine" d="M101 861l-19 66h17l18-65-16-1zM89 860h-4l-3 1-18 59 6 5 19-65z"></path>
        </g>
      </svg>
    </div>
  )
}

export default Shades
