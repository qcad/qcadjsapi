cmake_minimum_required(VERSION 3.16)
project(qcadjsapi VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 REQUIRED COMPONENTS Core Widgets Concurrent Gui Network OpenGL Sql Svg Xml PrintSupport Qml UiTools QuickWidgets Core5Compat)
qt_standard_project_setup()

qt_add_resources(SOURCES qcadjsapi.qrc)

if(CMAKE_BUILD_TYPE STREQUAL "Release")
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/release)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
else()
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/debug)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
endif()

qt_add_library(qcadjsapi SHARED
    generator/RJSHelper_qcad.h
    generator/RJSHelper_qcad.cpp
    generator/RJSType_qcad.h
    generator/RJSType_qcad.cpp
    generator/adapters/RNewDocumentListenerAdapter.h
    generator/adapters/RPreferencesListenerAdapter.h
    generator/adapters/RPaletteListenerAdapter.h
    generator/adapters/RTransactionListenerAdapter.h
    generator/adapters/RSpatialIndexVisitorAdapter.h
    generator/adapters/RScriptAdapters.cpp
    generator/adapters/REntityExportListenerAdapter.h
    generator/adapters/RCoordinateListenerAdapter.h
    generator/adapters/RExportListenerAdapter.h
    generator/adapters/RFocusListenerAdapter.h
    generator/adapters/RImportListenerAdapter.h
    generator/adapters/RViewFocusListenerAdapter.h
    generator/adapters/RSelectionListenerAdapter.h
    generator/adapters/RFontDatabase.h
    generator/adapters/RFileImporterFactoryAdapter.h
    generator/adapters/RFileExporterFactoryAdapter.h
    generator/adapters/RFileExporterAdapter.h
    generator/adapters/RFileImporterAdapter.h
    generator/adapters/RInterTransactionListenerAdapter.h
    generator/adapters/RPropertyListenerAdapter.h
    generator/adapters/RKeyListenerAdapter.h
    generator/adapters/RPenListenerAdapter.h
    generator/adapters/RBlockListenerAdapter.h
    generator/adapters/RLayerListenerAdapter.h
    generator/adapters/RViewListenerAdapter.h
    RAutoLoadJs.cpp RAutoLoadJs.h
    RJSApiPlugin.cpp RJSApiPlugin.h
    RScriptHandlerJs.cpp RScriptHandlerJs.h
    ${SOURCES}
)

include(generator/CMakeInclude.txt)

target_include_directories(qcadjsapi PRIVATE
    ../qtjsapi
    ../qtjsapi/generator
    ../qtjsapi/generator/cpp
    ../qcad/src/3rdparty
    ../qcad/src/3rdparty/opennurbs
    ../qcad/src/3rdparty/spatialindexnavel
    ../qcad/src/3rdparty/stemmer/include
    ../qcad/src/3rdparty/dxflib/src
    ../qcad/src/core
    ../qcad/src/core/math
    ../qcad/src/customwidgets
    ../qcad/src/entity
    ../qcad/src/grid
    ../qcad/src/gui
    ../qcad/src/io
    ../qcad/src/io/dxf
    ../qcad/src/operations
    ../qcad/src/run
    ../qcad/src/scripting
    ../qcad/src/scripting/jsapi
    ../qcad/src/scripts
    ../qcad/src/snap
    ../qcad/src/spatialindex
    ../qcad/src/stemmer
    generator
    generator/cpp
    generator/adapters
    .
)

set_target_properties(qcadjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../qcad/plugins)
set_target_properties(qcadjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../qcad/plugins)
set_target_properties(qcadjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../qcad/plugins)

target_compile_definitions(qcadjsapi PRIVATE
    qcadjsapi_LIBRARY
    QCAD_DLL
)

target_link_libraries(qcadjsapi PRIVATE
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
    qcadentity
    qcadgui
    qcadsnap
    qcadgrid
    qcadoperations
    qcadspatialindex
    qtjsapi
)
