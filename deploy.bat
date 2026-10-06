@echo off
title Kokia's Coding Arcade - Online Deployer
color 0b
echo =========================================================================
echo   Kokia's Coding Arcade - 1-Click Online Sync for Parents! 📱🌐
echo =========================================================================
echo.

git remote get-url origin >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [!] Your GitHub repository is not connected yet.
    echo.
    echo To connect your free GitHub repository once:
    echo 1. Create a new repository on https://github.com (e.g. kokias-arcade)
    echo 2. Run this command in PowerShell or Command Prompt:
    echo.
    echo    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    echo    git push -u origin main
    echo.
    echo 3. Turn on GitHub Pages under: Settings -^> Pages -^> Branch: main
    echo.
    echo ---------------------------------------------------------------------
    echo Alternatively, if you want an instant link with Vercel right now:
    echo Press 'V' to launch instant Vercel deploy, or any other key to exit.
    echo ---------------------------------------------------------------------
    set /p choice="Your choice (V for Vercel / Any key to exit): "
    if /i "%choice%"=="V" (
        echo.
        echo Deploying instantly to Vercel...
        npx vercel --prod
    )
    goto end
)

echo Adding latest games, reports, and pictures...
git add .
git commit -m "Update Kokia's Coding Arcade games & progress"
echo.
echo Pushing changes online...
git push origin main
echo.
echo =========================================================================
echo [SUCCESS] Live website updated!
echo Kokia's parents can open their link and play right away on their phones!
echo =========================================================================

:end
echo.
pause
