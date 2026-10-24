cmake_minimum_required(VERSION 3.16)

include(../qcad/CMakeInclude.txt)

project(qcadjsapi VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_AUTOMOC ON)

find_package(Qt6 REQUIRED COMPONENTS Core Widgets Concurrent Gui Network OpenGL Sql Svg Xml PrintSupport Qml UiTools QuickWidgets Core5Compat Help)
qt_standard_project_setup()

# Regenerate qcadjsapi.qrc from the current files on disk at build time, wrapped
# in a dedicated custom target (qcadjsapi_qrc) rather than attached to the
# qcadjsapi library target.
#
# This decoupling is what avoids a dependency cycle. qt_add_resources() below
# registers each .qrc as a configure-time dependency (CMAKE_LIST_FILES), and
# cmake_autogen records all of those in its depfile, so qcadjsapi_autogen ends
# up depending on the .qrc files. If the command that *produces* the .qrc were
# attached to qcadjsapi, CMake would also give it an order-only dependency on
# qcadjsapi_autogen, closing the loop. Owning the producer with a separate
# target (no AUTOGEN) breaks the forward edge.
#
# The extra, never-created output forces the command to run on every build;
# update_qrc.sh only rewrites a .qrc when its content actually changed (via its
# diff check), so rcc is only re-invoked when there is a real change.
#
# The .qrc files are only regenerated on macOS. On Windows the shell script
# cannot be executed (it gets opened with the associated text editor instead)
# and on Linux it is not needed; on those platforms the checked-in .qrc files
# are used as-is.
if(APPLE)
    add_custom_command(
        OUTPUT
            ${CMAKE_CURRENT_SOURCE_DIR}/qcadjsapi.qrc
            ${CMAKE_CURRENT_BINARY_DIR}/update_qrc_always_run
        COMMAND ${CMAKE_CURRENT_SOURCE_DIR}/update_qrc.sh qcad
        WORKING_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}
        COMMENT "Updating qcadjsapi.qrc"
        VERBATIM
    )

    add_custom_target(qcadjsapi_qrc
        DEPENDS
            ${CMAKE_CURRENT_SOURCE_DIR}/qcadjsapi.qrc
            ${CMAKE_CURRENT_BINARY_DIR}/update_qrc_always_run
    )
endif()

qt_add_resources(SOURCES qcadjsapi.qrc)

if(MSVC)
    add_compile_options(/bigobj)
endif()

if(CMAKE_BUILD_TYPE STREQUAL "Release")
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/release)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
else()
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/debug)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
endif()

qt_add_library(qcadjsapi SHARED
    generator/RJSHelper_qcad.h
    generator/RJSHelper_qcad_manual.cpp
    generator/RJSHelper_qcad_primitive.cpp
    generator/RJSHelper_qcad_shared_ptr.cpp
    generator/RJSHelper_qcad_shared_ptr_no_copy.cpp
    generator/RJSHelper_qcad_wrapped.cpp
    generator/RJSHelper_qcad_wrapped_ptr.cpp
    generator/RJSHelper_qcad_wrapped_qobject_ptr.cpp
    generator/RJSHelper_qcad_wrapped_qobject_ptr.cpp
    generator/RJSHelper_qcad_qlist.cpp
    generator/RJSHelper_qcad_qlist_ptr.cpp
    generator/RJSHelper_qcad_qlist_shared_ptr.cpp
    generator/RJSHelper_qcad_qset.cpp
    generator/RJSHelper_qcad_qmap.cpp
    generator/RJSHelper_qcad_qhash.cpp
    generator/RJSHelper_qcad_qpair.cpp
    generator/RJSHelper_qcad_dummy.cpp
    generator/RJSHelper_qcad_dummy_ptr.cpp
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
    ${SOURCES_MOC}
)

# Ensure the .qrc files are regenerated before this target's resources are
# compiled (the rcc command also depends on the .qrc files directly).
if(APPLE)
    add_dependencies(qcadjsapi qcadjsapi_qrc)
endif()

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
    ../qcad/src/core/bridges
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

set_target_properties(qcadjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
set_target_properties(qcadjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
set_target_properties(qcadjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)

target_compile_definitions(qcadjsapi PRIVATE
    QCADJSAPI_LIBRARY
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
    Qt::Help
    qcadcore
    qcadentity
    qcadgui
    qcadsnap
    qcadgrid
    qcadoperations
    qcadspatialindex
    qcadstemmer
    qtjsapi
    opennurbs
)
