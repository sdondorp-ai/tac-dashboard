@echo off
title TAC Media Dashboard
echo Opstarten TAC Media Dashboard...

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Python gevonden, server starten op http://localhost:8765
    start "" "http://localhost:8765"
    timeout /t 1 /noisy:n >nul
    python -m http.server 8765 --directory "%~dp0"
    goto :end
)

REM Check Python3
python3 --version >nul 2>&1
if %errorlevel% == 0 (
    echo Python3 gevonden, server starten op http://localhost:8765
    start "" "http://localhost:8765"
    timeout /t 1 /noisy:n >nul
    python3 -m http.server 8765 --directory "%~dp0"
    goto :end
)

REM Fallback: open direct (no PWA, but still works)
echo Python niet gevonden - dashboard openen als bestand...
start "" "%~dp0index.html"

:end
