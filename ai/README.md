# ai 감정 모델 다운로드
- 용량이 커서 분석 보델을 git에 올리지 못했습니다 아래링크로 들어가서 파일 2개 다운받고<br/> ai폴더에 하위폴더로 bert_uncased_model3.pt 만들어서 넣어주세요.
- torch, transformers 모듈 설치 해주세요
- https://drive.google.com/drive/folders/1-Bt0eH1NF-U9lmSB6pR_Wrlfo78xAlje?usp=sharing
- 폴더 구조<br/>
```ai
├── model
│   └── data
├── bert_uncased_model3.pt
│   ├── config.json
│   └── pytorch_model.bin
├── app.py
├── Cosine_Search.py
├── predict_s.py
└── df.pkl
``` 