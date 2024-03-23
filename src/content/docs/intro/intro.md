---
title: "Introduction"
sidebar:
  order: 1
---

## GameEngine

Project Amano(nazwa robocza)

- in honor to: hiroshi Amano

Amano jest silnikiem gier celującym w grafikę 2D, jego głównym założeniem jest krótki czas i prostota tworzenia własnych projektów. Przeznaczony on jest główne do robienia prostych gier 2D ktore może zbudować każdy nawet bez specjalistycznej wiedzy na temat Game Devu, jego celem jest pokazać że nawet z podstawową wiedzą można zbudować interaktywne ciekawe aplikację. Napisany jest on w języku TypeScript by zmniejszyć przepaść między WebDevem a GameDevem. Jego trzon opiera się o technologię Electron ktora pozwala wyeksportować gotowy projekt jako natywną aplikację na systemy PC a co za tym idzie podzielić się swoim projektem ze światem czy to poprzez [itch.io](http://itch.io) czy wstwiając go na steama. Docelowo silnik ma też pozwalać tworzyć gry działąjące bezpośrednio w przeglądarce.

## Modules

Silnik składa się w założeniu z kilku modułów które docelowo zostaną połączone w jedną aplikację. Moduły te to:

### Edytor

Główny graficzny interface do tworzenia własnych projektów, w nim odbywać się będzie cała praca nad grą. Wszystkie poniższe moduły finalnie preniesione zostaną i zintegrowane z nim.

### Core

Główna część silnika odpowiedzialna za całe jego działanie, zapewnia takie funkcje jak InputManager, zarządzanie oknem aplikacji czy Czas

### Aurora

Renderer graficzny oparty na webGPU, zapewnie dużą wydajnośc i pozwala na tworzenie własnych “pipelinów” graficznych wraz z shaderami, zapewnie też Batcher czyli gotowy “Universal Render Pipeline” jesli po prostu chcemy zacząć prace i nie potrzebujemy żadnych specyficznych możliwości graficznych. WebGPU jest przyszłościowym API zającym zastąpić juz długoletnie i nie wspierane webGL w przeglądarkach internetowych. Mimo iż jest on w fazie eksperymentalnej, zastosowanie jako trzonu Electrona(opartego na chromium) gwarantuje zawsze pełne wsparcie dla tej technologii.

### DOGMA

DOGMA czyli data oriented game mechanics architecture jest systemem ECS(entity component system) zastosowanym w trzonie silnika, pozwala on na sprawne i latwe budowanie obiektów w grze i przejrzyste manipulowanie nimi poprzez systemy.

### MapCreator

Aplikacja pozwalająca tworzyć poziomy i mapy. Głównym systemem tworzenia map obecnie jest grid Layout. Kreator pozwala na tworznie zarazem małych map poziomów oraz dużych wielokilometrowych map bez ekranów wczytywania.Dzięki dostępowi do “file systemu” zarazem silnik jak i kreator wspierają nieskończone światy generowane do pliku.

### FontParser

Pozwala na jednoczesne używanie plików TTF jako źródła czcionki w grze, jak i zarazem pozwala na tworzenie “FontAtlasów” dla własnych czcionek. Zapewnia Rasteryzator oraz SDF

### NaviGPU

System tworzenia GUI wzorowany na HTML&CSS oraz projektach jak “imGui”. Jego założeniem jest pozwalać zbudować dobrze wyglądający UI zapewniający wsparcie graficzne za pomocą GPU. Pozwal na ręczne ustawianie elementów na ekranie za pomocą “pixeli” lub “procent ekranu” jak i layout system podobny do Flexboxa w CSS. Kominukacja między NaviGPU a ECS nastepuje za pomocą sygnałów.

## Current Progress:

- Development status:
  - silnik obecnie pozwala na tworzenie małych prostych gier typu mario czy pokemony
- moduły:
  - Edytor - preplaning
  - Core - in progress
  - Aurora - in progress
  - DOGMA - alpha
  - MapCreator - preplaning
  - FontParser - on hold
  - NaviGPU - in progress
