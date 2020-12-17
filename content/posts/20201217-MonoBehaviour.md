---
title: 🎮 Unity의 MonoBehaviour란
description: 모든 스크립트의 조상에 대해 알아보자
tags: "유니티"
date: "2020-12-17S01"
---

# Mono

Mono는 윈도우가 아닌 다른 플랫폼에서 .Net 프레임워크를 사용하기 위해 개발한 것이다. .Net 프레임워크의 오픈소스 개발 플랫폼으로써 크로스플랫폼 어플리케이션의 개발을 지원하며, C#과 CLI에 기반을 두고 있다.

유니티에서는 .Net 4.x까지 지원하며 C# 7까지 사용할 수 있다.

# Unity의 Behaviour Script

유니티에서 하나의 스크립트는 그 자체로 하나의 클래스이다.

클래스는 속성과 메서드를 하나의 객체로 묶은 데이터 타입이다.

유니티의 모든 스크립트는 Behaviour Component이며, 활성화 비활성화가 가능하다.

# MonoBehaviour

MonoBehaviour는 Unity의 모든 스크립트가 상속받는 클래스이다.

사용자가 Unity 엔진의 작동 방식을 이해하지 못하더라도 코드를 작성할 수 있도록 빌트인 된 Behaviour 클래스이자 스크립트 명령들의 집합이다.

덕분에 모든 스크립트는 유니티 엔진에 의해 호출되는 콜백함수들을 이용할 수 있게 된다.

이 콜백 함수들은 Reset, Awake, Start, Update, OnGUI, OnDestroy 등이 있다.

이들을 오버라이딩해서 사용하는 방식이다.

# MonoBehaviour의 라이프사이클

자세한 것은 매뉴얼에서 살펴보자.

https://docs.unity3d.com/kr/530/ScriptReference/MonoBehaviour.html

- Reset: 유니티 데이터에서 오브젝트 생성 후 인스펙터 뷰에서 리셋을 눌러줄 때 실행.

- Awake: 프리팹이 인스턴스화 한 직후, 스크립트가 호출되자마자 실행되며, 활성화 여부와 상관없다. 언제나 오브젝트 초기화 이후에 호출된다.

- OnEnable: 다른 초기화 함수와 달리 하나의 라이프 사이클 내에서 여러번 호출 될 수 있다. 활성화 될 때 마다 호출된다.

- Start: Update 함수가 호출되기 전에 한번만 호출된다. 다른 스크립트의 모든 Awake가 모두 실행된 이후에 실행되며, 오브젝트가 활성화 되어있어야 호출된다.

- FixedUpdate: 프레임과 상관없이 무조건 시간기준으로 호출되는 Update이다. 주로 물리 엔진을 사용 시 일정 시간 간격으로 힘을 가하거나 체크할 때 사용한다. 프레임이 느려질 경우 한 프레임에서 여러번 호출될 수 있다.

- Update: 매 프레임마다 호출된다.

- LateUpdate: 모든 Update 콜백 실행 이후에 호출된다. Update 함수에서 캐릭터를 이동시킨 후 LastUpdate에서 캐릭터의 좌표를 추적해 카메라의 좌표를 이동시키는 등의 경우에 사용.

- OnDisable: 비활성화시 마다 호출됨.

- OnDestroy: 해당 오브젝트가 파괴되기 전 프레임의 Update 함수 실행 후 호출 된다. 자원을 돌려놓는 작업을 하는 곳이기도 하다.

- OnApplicationQuit: 앱이 종료 되기 직전 모든 오브젝트에서 호출된다.

# MonoBehaviour의 특징

MonoBehaviour를 상속받은 스크립트 파일은 GameObject에 Component형태로 등록되어야만 사용될 수 있다.

GameManager같은 코드를 만들어도 이를 사용할 오브젝트를 추가해야만 한다.

MonoBehaviour를 상속받은 클래스는 new로 동적할당 할 수 없다.

`GameObject.Instantiate` 함수를 통해 해당 스크립트가 Component로 추가된 오브젝트의 인스턴스를 생성하고, GameObject 객체에 `AddComponent<GameManager>();` 같은 방식으로만 사용할 수 있다.

# References

https://skuld2000.tistory.com/25

https://docs.unity3d.com/kr/530/ScriptReference/MonoBehaviour.html
