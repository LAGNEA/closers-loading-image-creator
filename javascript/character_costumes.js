const STRIKER = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        "원더랜드", "원더랜드 [TYPE 2]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "만우절 [A]", "만우절 [B]"
    ];

    const CASTER = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", "4월의 고양이",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        "설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        "원더랜드", "원더랜드 [TYPE 2]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        "어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        "체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]",
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "굿나잇 키스 [A]", "굿나잇 키스 [B]", "굿나잇 키스 [C]", "굿나잇 키스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const RANGER = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", "4월의 고양이",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        "롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]",
        "원더랜드", "원더랜드 [TYPE 2]",
        "임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        "어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "굿나잇 키스 [A]", "굿나잇 키스 [B]", "굿나잇 키스 [C]", "굿나잇 키스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const FIGHTER = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", //"4월의 고양이",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        //"봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        //"강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "유니온 시크릿 서비스 [A]", "유니온 시크릿 서비스 [B]", "유니온 시크릿 서비스 [C]", "유니온 시크릿 서비스 [혼합형]",
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]",
        //"미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        //"신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]", 
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "창해의 로망스 [A]", "창해의 로망스 [B]", "창해의 로망스 [C]", "창해의 로망스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const LANCER = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", //"4월의 고양이",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        //"봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        //"강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        //"유니온 시크릿 서비스 [A]",  "유니온 시크릿 서비스 [B]",  "유니온 시크릿 서비스 [C]",  "유니온 시크릿 서비스 [혼합형]", 
        "윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        //"그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]", 
        //"미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        "임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        //"신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]", 
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "창해의 로망스 [A]", "창해의 로망스 [B]", "창해의 로망스 [C]", "창해의 로망스 [혼합형]", 
        "굿나잇 키스 [A]", "굿나잇 키스 [B]", "굿나잇 키스 [C]", "굿나잇 키스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const HUNTER = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", //"4월의 고양이",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        //"봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        //"강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        //"유니온 시크릿 서비스 [A]",  "유니온 시크릿 서비스 [B]",  "유니온 시크릿 서비스 [C]",  "유니온 시크릿 서비스 [혼합형]", 
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]",
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]", 
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        //"신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]", 
        "어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "만우절 [A]", "만우절 [B]"
    ];

    const WITCH = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", "4월의 고양이",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        //"유니온 시크릿 서비스 [A]",  "유니온 시크릿 서비스 [B]",  "유니온 시크릿 서비스 [C]",  "유니온 시크릿 서비스 [혼합형]", 
        "윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        //"그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]", 
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        "임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        "체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]",
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "창해의 로망스 [A]", "창해의 로망스 [B]", "창해의 로망스 [C]", "창해의 로망스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const ROGUE = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", "4월의 고양이",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "유니온 시크릿 서비스 [A]", "유니온 시크릿 서비스 [B]", "유니온 시크릿 서비스 [C]", "유니온 시크릿 서비스 [혼합형]",
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        //"그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]", 
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]", 
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        "체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]",
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "트랙슈터 [A]", "트랙슈터 [B]", "트랙슈터 [C]", "트랙슈터 [혼합형]",
        "굿나잇 키스 [A]", "굿나잇 키스 [B]", "굿나잇 키스 [C]", "굿나잇 키스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const ARMS = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        "여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", "4월의 고양이",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        "설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "유니온 시크릿 서비스 [A]", "유니온 시크릿 서비스 [B]", "유니온 시크릿 서비스 [C]", "유니온 시크릿 서비스 [혼합형]",
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]",
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]", 
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "트랙슈터 [A]", "트랙슈터 [B]", "트랙슈터 [C]", "트랙슈터 [혼합형]",
        "만우절 [A]", "만우절 [B]"
    ];

    const VALKYRIE = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        /*"여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", */
        "4월의 고양이",
        "로열 로즈 [A]", "로열 로즈 [B]", "로열 로즈 [C]", "로열 로즈 [혼합형]",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        //"유니온 시크릿 서비스 [A]",  "유니온 시크릿 서비스 [B]",  "유니온 시크릿 서비스 [C]",  "유니온 시크릿 서비스 [혼합형]", 
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]",
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        "임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "창해의 로망스 [A]", "창해의 로망스 [B]", "창해의 로망스 [C]", "창해의 로망스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const LIBRARIAN = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", "사이버네틱", "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        //"여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", "4월의 고양이",
        "로열 로즈 [A]", "로열 로즈 [B]", "로열 로즈 [C]", "로열 로즈 [혼합형]",
        "해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        //"봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        //"강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "유니온 시크릿 서비스 [A]", "유니온 시크릿 서비스 [B]", "유니온 시크릿 서비스 [C]", "유니온 시크릿 서비스 [혼합형]",
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        //"그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]", 
        //"미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        "임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        //"신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]", 
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "트랙슈터 [A]", "트랙슈터 [B]", "트랙슈터 [C]", "트랙슈터 [혼합형]",
        "만우절 [A]", "만우절 [B]"
    ];

    const AEGIS = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", /*"사이버네틱",*/ "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        /*"여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]",*/
        "4월의 고양이",
        //"로열 로즈 [A]", "로열 로즈 [B]", "로열 로즈 [C]", "로열 로즈 [혼합형]", 
        /*"해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]",*/
        "나이트메어",
        "슈레딩거의 고양이 [A]", "슈레딩거의 고양이 [B]", "슈레딩거의 고양이 [C]", "슈레딩거의 고양이 [혼합형]",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        "설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "유니온 시크릿 서비스 [A]", "유니온 시크릿 서비스 [B]", "유니온 시크릿 서비스 [C]", "유니온 시크릿 서비스 [혼합형]",
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        //"그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]", 
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]", 
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        "체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]",
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "창해의 로망스 [A]", "창해의 로망스 [B]", "창해의 로망스 [C]", "창해의 로망스 [혼합형]", 
        "만우절 [A]" /*"만우절 [B]"*/
    ];

    const ASTRA = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", /*"사이버네틱",*/ "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        /*"여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]",*/
        "4월의 고양이",
        //"로열 로즈 [A]", "로열 로즈 [B]", "로열 로즈 [C]", "로열 로즈 [혼합형]", 
        /*"해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]",*/
        "나이트메어",
        "스톰 라이더 [A]", "스톰 라이더 [B]", "스톰 라이더 [C]", "스톰 라이더 [혼합형]",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "유니온 시크릿 서비스 [A]", "유니온 시크릿 서비스 [B]", "유니온 시크릿 서비스 [C]", "유니온 시크릿 서비스 [혼합형]",
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        //"그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]", 
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        "원더랜드", "원더랜드 [TYPE 2]",
        "임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]",
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "트랙슈터 [A]", "트랙슈터 [B]", "트랙슈터 [C]", "트랙슈터 [혼합형]",
        "굿나잇 키스 [A]", "굿나잇 키스 [B]", "굿나잇 키스 [C]", "굿나잇 키스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const MYSTIC = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", /*"사이버네틱",*/ "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        /*"여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]",*/
        "4월의 고양이",
        //"로열 로즈 [A]", "로열 로즈 [B]", "로열 로즈 [C]", "로열 로즈 [혼합형]", 
        /*"해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]",*/
        "나이트메어",
        "그레이스풀 레이디 [A]", "그레이스풀 레이디 [B]", "그레이스풀 레이디 [C]", "그레이스풀 레이디 [혼합형]",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        "선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        "봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        "론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        "강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        "템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]",
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        //"유니온 시크릿 서비스 [A]",  "유니온 시크릿 서비스 [B]",  "유니온 시크릿 서비스 [C]",  "유니온 시크릿 서비스 [혼합형]", 
        "윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]",
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        "롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]",
        "원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]", 
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        "어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        "체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]",
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "굿나잇 키스 [A]", "굿나잇 키스 [B]", "굿나잇 키스 [C]", "굿나잇 키스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const BEAST = ["코스튬을 선택하세요",
    "샤이닝☆스타", "암흑의 광휘", /*"사이버네틱",*/ "지고의 날개", "칠흑의 날개", "드래고니안", "드래고니안 각성", "기본 일러스트", "정식", "특수", "태스크포스",
        /*"여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]",*/
        "4월의 고양이",
        //"로열 로즈 [A]", "로열 로즈 [B]", "로열 로즈 [C]", "로열 로즈 [혼합형]", 
        /*"해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]",*/
        "나이트메어",
        "빅토리아 리퍼 [A]", "빅토리아 리퍼 [B]", "빅토리아 리퍼 [C]", "빅토리아 리퍼 [혼합형]",
        "꿈꾸는 소녀 [A]", "꿈꾸는 소녀 [B]", "꿈꾸는 소녀 [C]", "꿈꾸는 소녀 [혼합형]",
        "이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]",
        //"선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        //"봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        //"론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        //"강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        //"템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]", 
        "디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        "설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        //"유니온 시크릿 서비스 [A]",  "유니온 시크릿 서비스 [B]",  "유니온 시크릿 서비스 [C]",  "유니온 시크릿 서비스 [혼합형]", 
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        "그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]",
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        "서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        "롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]",
        "원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]", 
        "서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]",
        "어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "창해의 로망스 [A]", "창해의 로망스 [B]", "창해의 로망스 [C]", "창해의 로망스 [혼합형]", 
        "만우절 [A]", "만우절 [B]"
    ];

    const NONAME = ["코스튬을 선택하세요",
    "샤이닝☆스타", /*"암흑의 광휘", "사이버네틱", */"지고의 날개", /*"칠흑의 날개",*/ "드래고니안", "드래고니안 각성", "기본 일러스트", "해결사",
        //"여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", "4월의 고양이",
        //"로열 로즈 [A]", "로열 로즈 [B]", "로열 로즈 [C]", "로열 로즈 [혼합형]", 
        //"해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        "프로메테우스 [A]", "프로메테우스 [B]", "프로메테우스 [C]", "프로메테우스 [혼합형]",
        //"이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]", 
        //"선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        //"봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        //"론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        //"강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        //"템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]", 
        //"디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        //"하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        //"하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        //"유니온 시크릿 서비스 [A]",  "유니온 시크릿 서비스 [B]",  "유니온 시크릿 서비스 [C]",  "유니온 시크릿 서비스 [혼합형]", 
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        //"그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]", 
        //"미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        //"서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        //"원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]", 
        //"서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        //"신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]", 
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        //"포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        //"체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]", 
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "트랙슈터 [A]", "트랙슈터 [B]", "트랙슈터 [C]", "트랙슈터 [혼합형]",
        "만우절 [A]"/*, "만우절 [B]"*/
    ];

    const REAPER = ["코스튬을 선택하세요",
    "샤이닝☆스타", /*"암흑의 광휘", "사이버네틱", */"지고의 날개",/* "칠흑의 날개",*/ "드래고니안", "드래고니안 각성", "기본 일러스트", "해결사",
        //"여름 바캉스 [A]", "여름 바캉스 [B]", "여름 바캉스 [C]", "여름 바캉스 [혼합형]", "4월의 고양이",
        //"로열 로즈 [A]", "로열 로즈 [B]", "로열 로즈 [C]", "로열 로즈 [혼합형]", 
        //"해변의 랩소디 [A]", "해변의 랩소디 [B]", "해변의 랩소디 [C]", "해변의 랩소디 [혼합형]", "나이트메어",
        "아르카나 조커 [A]", "아르카나 조커 [B]", "아르카나 조커 [C]", "아르카나 조커 [혼합형]",
        //"이브닝 파티 [A]", "이브닝 파티 [B]", "이브닝 파티 [C]", "이브닝 파티 [혼합형]", 
        //"선샤인 웨이브 [A]", "선샤인 웨이브 [B]", "선샤인 웨이브 [C]", "선샤인 웨이브 [혼합형]", "선샤인 스페셜 [A]", "선샤인 스페셜 [B]", "선샤인 스페셜 [C]",
        //"봄요정의 나들이 [A]", "봄요정의 나들이 [B]", "봄요정의 나들이 [C]", "봄요정의 나들이 [혼합형]",
        //"론 레인저 [A]", "론 레인저 [B]", "론 레인저 [C]", "론 레인저 [혼합형]",
        //"강철의 기동함장 [A]", "강철의 기동함장 [B]", "강철의 기동함장 [C]", "강철의 기동함장 [혼합형]",
        //"템테이션 산타 [A]", "템테이션 산타 [B]", "템테이션 산타 [C]", "템테이션 산타 [혼합형]", 
        //"디멘션 노커 [A]", "디멘션 노커 [B]", "디멘션 노커 [C]", "디멘션 노커 [혼합형]",
        //"설원의 프린세스 [A]", "설원의 프린세스 [B]", "설원의 프린세스 [C]", "설원의 프린세스 [혼합형]",
        "하프 앤 하프 [A]", "하프 앤 하프 [B]", "하프 앤 하프 [C]", "하프 앤 하프 [혼합형]",
        "하우스 키퍼 [A]", "하우스 키퍼 [B]", "하우스 키퍼 [C]", "하우스 키퍼 [D]", "하우스 키퍼 [혼합형]",
        //"유니온 시크릿 서비스 [A]",  "유니온 시크릿 서비스 [B]",  "유니온 시크릿 서비스 [C]",  "유니온 시크릿 서비스 [혼합형]", 
        //"윈드브레이커 [A]", "윈드브레이커 [B]", "윈드브레이커 [C]", "윈드브레이커 [혼합형]",
        "나른한 오전의 와이셔츠 [A]", "나른한 오전의 와이셔츠 [B]", "나른한 오전의 와이셔츠 [C]", "나른한 오전의 와이셔츠 [혼합형]",
        //"그라운드 디비전 [A]", "그라운드 디비전 [B]", "그라운드 디비전 [C]", "그라운드 디비전 [혼합형]", 
        "미드나잇 크루세이더 [A]", "미드나잇 크루세이더 [B]", "미드나잇 크루세이더 [C]", "미드나잇 크루세이더 [혼합형]",
        //"서머 아일랜드 [A]", "서머 아일랜드 [B]", "서머 아일랜드 [C]", "서머 아일랜드 [혼합형]",
        //"롤리팝 트위스트 [A]", "롤리팝 트위스트 [B]", "롤리팝 트위스트 [C]", "롤리팝 트위스트 [혼합형]", 
        //"원더랜드", "원더랜드 [TYPE 2]",
        //"임페리얼 가드 [A]", "임페리얼 가드 [B]", "임페리얼 가드 [C]", "임페리얼 가드 [혼합형]", 
        //"서빙 마스터 [A]", "서빙 마스터 [B]", "서빙 마스터 [C]", "서빙 마스터 [혼합형]",
        "신서울 요호 [A]", "신서울 요호 [B]", "신서울 요호 [C]", "신서울 요호 [혼합형]", 
        //"어반 싸울아비 [A]", "어반 싸울아비 [B]", "어반 싸울아비 [C]", "어반 싸울아비 [혼합형]",
        "포근한 겨울 [A]", "포근한 겨울 [B]", "포근한 겨울 [C]", "포근한 겨울 [혼합형]",
        "체크 플래그 [A]", "체크 플래그 [B]", "체크 플래그 [C]", "체크 플래그 [혼합형]",
        "은반의 앙상블 [A]", "은반의 앙상블 [B]", "은반의 앙상블 [C]", "은반의 앙상블 [혼합형]",
        "트랙슈터 [A]", "트랙슈터 [B]", "트랙슈터 [C]", "트랙슈터 [혼합형]",
        "만우절 [A]"/*, "만우절 [B]"*/
    ];