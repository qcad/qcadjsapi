cmake_minimum_required(VERSION 3.16)
project(rjsapi_qcad VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 REQUIRED COMPONENTS Core Widgets Concurrent Gui Network OpenGL Sql Svg Xml PrintSupport Qml UiTools QuickWidgets Core5Compat)
qt_standard_project_setup()

qt_add_resources(SOURCES rjsapi_qcad.qrc)

if(CMAKE_BUILD_TYPE STREQUAL "Release")
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/release)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
else()
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/debug)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
endif()

qt_add_library(rjsapi_qcad SHARED
    generator/RJSHelper_qcad.h
    generator/RJSHelper_qcad.cpp
    generator/RJSType_qcad.h
    generator/RJSType_qcad.cpp
    ${SOURCES}
)

include(generator/CMakeInclude.txt)

target_include_directories(rjsapi_qcad PRIVATE
    ../rjsapi/
    ../rjsapi/generator
    ../qcad/src/core
    ../qcad/src/core/math
    generator
    .
)

if (CMAKE_BUILD_TYPE STREQUAL "Release")
    set_target_properties(rjsapi_qcad PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../qcad/release)
    set_target_properties(rjsapi_qcad PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../qcad/release)
    set_target_properties(rjsapi_qcad PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../qcad/release)
else()
    set_target_properties(rjsapi_qcad PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../qcad/debug)
    set_target_properties(rjsapi_qcad PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../qcad/debug)
    set_target_properties(rjsapi_qcad PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../qcad/debug)
endif()

target_compile_definitions(rjsapi_qcad PRIVATE
    RJSAPI_QCAD_LIBRARY
    RJSAPI_QCAD_DLL
)

target_link_libraries(rjsapi_qcad PRIVATE
    Qt::Concurrent
    Qt::Core
    Qt::Gui
    Qt::Network
    Qt::OpenGL
    Qt::Qml
    Qt::Sql
    Qt::Svg
    Qt::Widgets
    Qt::Xml
    Qt::UiTools
    Qt::PrintSupport
    Qt::Core5Compat
    Qt::QuickWidgets
    qcadcore
    rjsapi
)
