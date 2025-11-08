@echo off
REM Portfolio Docker Management Script for Windows

:menu
echo.
echo ==========================================
echo   Portfolio Docker Management
echo ==========================================
echo.
echo 1. Build Docker Image
echo 2. Start Container
echo 3. Stop Container
echo 4. View Logs
echo 5. Restart Container
echo 6. Rebuild (Clean Build)
echo 7. Clean Up (Remove Container and Image)
echo 8. Check Status
echo 9. Exit
echo.
set /p choice="Enter your choice (1-9): "

if "%choice%"=="1" goto build
if "%choice%"=="2" goto start
if "%choice%"=="3" goto stop
if "%choice%"=="4" goto logs
if "%choice%"=="5" goto restart
if "%choice%"=="6" goto rebuild
if "%choice%"=="7" goto clean
if "%choice%"=="8" goto status
if "%choice%"=="9" goto end
goto menu

:build
echo Building Docker image...
docker-compose build
echo.
echo Build complete!
pause
goto menu

:start
echo Starting container...
docker-compose up -d
echo.
echo Portfolio is running at http://localhost:3000
pause
goto menu

:stop
echo Stopping container...
docker-compose down
echo.
echo Container stopped!
pause
goto menu

:logs
echo Showing logs (Press Ctrl+C to exit)...
docker-compose logs -f
goto menu

:restart
echo Restarting container...
docker-compose restart
echo.
echo Container restarted!
pause
goto menu

:rebuild
echo Rebuilding from scratch...
docker-compose down
docker-compose build --no-cache
docker-compose up -d
echo.
echo Rebuild complete! Portfolio is running at http://localhost:3000
pause
goto menu

:clean
echo Cleaning up...
docker-compose down
docker rmi portfolio-nuranggi 2>nul
echo.
echo Cleanup complete!
pause
goto menu

:status
echo Checking container status...
docker ps -a
echo.
pause
goto menu

:end
echo Goodbye!
exit
