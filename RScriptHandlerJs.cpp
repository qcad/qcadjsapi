/**
 * Copyright (c) 2021 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
#include <QQmlEngine>
#include <QNetworkAccessManager>
#include <QNetworkReply>

#include <QtConcurrent>

#include "RFileCache.h"
#include "RScriptHandlerJs.h"
#include "RSingleApplication.h"
#include "RScriptHandlerRegistry.h"
#include "RJSWrapperObj.h"
#include "RJSTools.h"

#include "generator/cpp/rvector_wrapper.h"
#include "generator/cpp/rmainwindowqt_wrapper.h"
#include "generator/cpp/rsettings_wrapper.h"
#include "generator/cpp/rspatialindexsimple_wrapper.h"
#include "generator/cpp/rmemorystorage_wrapper.h"
#include "generator/cpp/rdocument_wrapper.h"
#include "generator/cpp/rpluginloader_wrapper.h"
#include "generator/cpp/rs_wrapper.h"
#include "generator/cpp/rfont_wrapper.h"
#include "generator/cpp/rfontlist_wrapper.h"
#include "generator/cpp/rplugininterface_wrapper.h"
#include "generator/cpp/rfilecache_wrapper.h"
#include "generator/cpp/rcolorcombo_wrapper.h"
#include "generator/cpp/rcombobox_wrapper.h"
#include "generator/cpp/rlineweight_wrapper.h"
#include "generator/cpp/rlineweightcombo_wrapper.h"
#include "generator/cpp/rlinetypecombo_wrapper.h"
#include "generator/cpp/rplugininfo_wrapper.h"
#include "generator/cpp/reventfilter_wrapper.h"
#include "generator/cpp/rtooloptioneventfilter_wrapper.h"
#include "generator/cpp/rsingleapplication_wrapper.h"
#include "generator/cpp/raction_wrapper.h"
#include "generator/cpp/ractionadapter_wrapper.h"
#include "generator/cpp/rcolor_wrapper.h"
#include "generator/cpp/runit_wrapper.h"
#include "generator/cpp/rtreewidget_wrapper.h"
#include "generator/cpp/rwidget_wrapper.h"
#include "generator/cpp/rguiaction_wrapper.h"
#include "generator/cpp/rdockwidget_wrapper.h"
#include "generator/cpp/rflowlayout_wrapper.h"
#include "generator/cpp/rviewfocuslisteneradapter_wrapper.h"
#include "generator/cpp/rblocklisteneradapter_wrapper.h"
#include "generator/cpp/rcommandline_wrapper.h"
#include "generator/cpp/rmathlineedit_wrapper.h"
#include "generator/cpp/rmath_wrapper.h"
#include "generator/cpp/rmathcombobox_wrapper.h"
#include "generator/cpp/rpenlisteneradapter_wrapper.h"
#include "generator/cpp/rmdiarea_wrapper.h"
#include "generator/cpp/rpalettelisteneradapter_wrapper.h"
#include "generator/cpp/rfocuslisteneradapter_wrapper.h"
#include "generator/cpp/rdocumentinterface_wrapper.h"
#include "generator/cpp/rgraphicsviewqt_wrapper.h"
#include "generator/cpp/rgraphicssceneqt_wrapper.h"
#include "generator/cpp/rpropertyeditor_wrapper.h"
#include "generator/cpp/rentity_wrapper.h"
#include "generator/cpp/rlayerlisteneradapter_wrapper.h"
#include "generator/cpp/rselectionlisteneradapter_wrapper.h"
#include "generator/cpp/rautoloadjs_wrapper.h"
#include "generator/cpp/rtoolbutton_wrapper.h"
#include "generator/cpp/rcoordinatelisteneradapter_wrapper.h"
#include "generator/cpp/rspatialindexnavel_wrapper.h"
#include "generator/cpp/rmdichildqt_wrapper.h"
#include "generator/cpp/rorthogrid_wrapper.h"
#include "generator/cpp/rrulerqt_wrapper.h"
#include "generator/cpp/reventhandler_wrapper.h"
#include "generator/cpp/rgrid_wrapper.h"
#include "generator/cpp/rcommandevent_wrapper.h"
#include "generator/cpp/rfontchooserwidget_wrapper.h"
#include "generator/cpp/rfileimporterregistry_wrapper.h"
#include "generator/cpp/rfileexporterregistry_wrapper.h"
#include "generator/cpp/rclosecurrentevent_wrapper.h"
#include "generator/cpp/rmouseevent_wrapper.h"
#include "generator/cpp/rdxfservices_wrapper.h"
#include "generator/cpp/rpasteoperation_wrapper.h"
#include "generator/cpp/rclipboardoperation_wrapper.h"
#include "generator/cpp/rpolyline_wrapper.h"
#include "generator/cpp/rsnapauto_wrapper.h"
#include "generator/cpp/rsnapfree_wrapper.h"
#include "generator/cpp/rrestrictoff_wrapper.h"
#include "generator/cpp/rsnapgrid_wrapper.h"
#include "generator/cpp/rgraphicsview_wrapper.h"
#include "generator/cpp/rsnap_wrapper.h"
#include "generator/cpp/rcoordinateevent_wrapper.h"
#include "generator/cpp/rsnaprestriction_wrapper.h"
#include "generator/cpp/rtransaction_wrapper.h"
#include "generator/cpp/rrefpoint_wrapper.h"
#include "generator/cpp/robject_wrapper.h"
#include "generator/cpp/rblockreferenceentity_wrapper.h"
#include "generator/cpp/rbox_wrapper.h"
#include "generator/cpp/rlineweight_wrapper.h"
#include "generator/cpp/rwheelevent_wrapper.h"
#include "generator/cpp/rtextentity_wrapper.h"
#include "generator/cpp/rtextedit_wrapper.h"
#include "generator/cpp/raddobjectoperation_wrapper.h"
#include "generator/cpp/raddobjectsoperation_wrapper.h"
#include "generator/cpp/rchangepropertyoperation_wrapper.h"
#include "generator/cpp/rclickreferencepointoperation_wrapper.h"
#include "generator/cpp/rclipboardoperation_wrapper.h"
#include "generator/cpp/rcopyoperation_wrapper.h"
#include "generator/cpp/rdeleteallentitiesoperation_wrapper.h"
#include "generator/cpp/rdeleteobjectoperation_wrapper.h"
#include "generator/cpp/rdeleteobjectsoperation_wrapper.h"
#include "generator/cpp/rdeleteselectionoperation_wrapper.h"
#include "generator/cpp/rmixedoperation_wrapper.h"
#include "generator/cpp/rmodifyobjectoperation_wrapper.h"
#include "generator/cpp/rmodifyobjectsoperation_wrapper.h"
#include "generator/cpp/rmovereferencepointoperation_wrapper.h"
#include "generator/cpp/rmoveselectionoperation_wrapper.h"
#include "generator/cpp/roperationutils_wrapper.h"
#include "generator/cpp/rpasteoperation_wrapper.h"
#include "generator/cpp/rscaleselectionoperation_wrapper.h"
#include "generator/cpp/rtransformation_wrapper.h"
#include "generator/cpp/rtranslation_wrapper.h"
#include "generator/cpp/rgraphicsscene_wrapper.h"
#include "generator/cpp/rfileimporterfactoryadapter_wrapper.h"
#include "generator/cpp/rfileimporteradapter_wrapper.h"
#include "generator/cpp/rfileexporteradapter_wrapper.h"
#include "generator/cpp/rpoint_wrapper.h"
#include "generator/cpp/rmessagehandler_wrapper.h"
#include "generator/cpp/rprogresshandler_wrapper.h"
#include "generator/cpp/rline_wrapper.h"
#include "generator/cpp/rarc_wrapper.h"
#include "generator/cpp/rellipse_wrapper.h"
#include "generator/cpp/rcircle_wrapper.h"
#include "generator/cpp/rshape_wrapper.h"
#include "generator/cpp/rspline_wrapper.h"
#include "generator/cpp/rray_wrapper.h"
#include "generator/cpp/rxline_wrapper.h"
#include "generator/cpp/rtriangle_wrapper.h"
#include "generator/cpp/rarcentity_wrapper.h"
#include "generator/cpp/rattributedefinitionentity_wrapper.h"
#include "generator/cpp/rattributeentity_wrapper.h"
#include "generator/cpp/rblockreferenceentity_wrapper.h"
#include "generator/cpp/rcircleentity_wrapper.h"
#include "generator/cpp/rdimalignedentity_wrapper.h"
#include "generator/cpp/rdimangular2lentity_wrapper.h"
#include "generator/cpp/rdimangular3pentity_wrapper.h"
#include "generator/cpp/rdimangularentity_wrapper.h"
#include "generator/cpp/rdimarclengthentity_wrapper.h"
#include "generator/cpp/rdimdiametricentity_wrapper.h"
#include "generator/cpp/rdimlinearentity_wrapper.h"
#include "generator/cpp/rdimordinateentity_wrapper.h"
#include "generator/cpp/rdimradialentity_wrapper.h"
#include "generator/cpp/rdimrotatedentity_wrapper.h"
#include "generator/cpp/rdimensionentity_wrapper.h"
#include "generator/cpp/rellipseentity_wrapper.h"
#include "generator/cpp/rfaceentity_wrapper.h"
#include "generator/cpp/rhatchentity_wrapper.h"
#include "generator/cpp/rimageentity_wrapper.h"
#include "generator/cpp/rleaderentity_wrapper.h"
#include "generator/cpp/rlineentity_wrapper.h"
#include "generator/cpp/rpointentity_wrapper.h"
#include "generator/cpp/rpolylineentity_wrapper.h"
#include "generator/cpp/rrayentity_wrapper.h"
#include "generator/cpp/rsolidentity_wrapper.h"
#include "generator/cpp/rsplineentity_wrapper.h"
#include "generator/cpp/rtextbasedentity_wrapper.h"
#include "generator/cpp/rtextentity_wrapper.h"
#include "generator/cpp/rtoleranceentity_wrapper.h"
#include "generator/cpp/rtraceentity_wrapper.h"
#include "generator/cpp/rviewportentity_wrapper.h"
#include "generator/cpp/rxlineentity_wrapper.h"
#include "generator/cpp/rarcdata_wrapper.h"
#include "generator/cpp/rattributedefinitiondata_wrapper.h"
#include "generator/cpp/rattributedata_wrapper.h"
#include "generator/cpp/rblockreferencedata_wrapper.h"
#include "generator/cpp/rcircledata_wrapper.h"
#include "generator/cpp/rdimaligneddata_wrapper.h"
#include "generator/cpp/rdimangular2ldata_wrapper.h"
#include "generator/cpp/rdimangular3pdata_wrapper.h"
#include "generator/cpp/rdimangulardata_wrapper.h"
#include "generator/cpp/rdimarclengthdata_wrapper.h"
#include "generator/cpp/rdimdiametricdata_wrapper.h"
#include "generator/cpp/rdimlineardata_wrapper.h"
#include "generator/cpp/rdimordinatedata_wrapper.h"
#include "generator/cpp/rdimradialdata_wrapper.h"
#include "generator/cpp/rdimrotateddata_wrapper.h"
#include "generator/cpp/rdimensiondata_wrapper.h"
#include "generator/cpp/rellipsedata_wrapper.h"
#include "generator/cpp/rfacedata_wrapper.h"
#include "generator/cpp/rhatchdata_wrapper.h"
#include "generator/cpp/rimagedata_wrapper.h"
#include "generator/cpp/rleaderdata_wrapper.h"
#include "generator/cpp/rlinedata_wrapper.h"
#include "generator/cpp/rpointdata_wrapper.h"
#include "generator/cpp/rpolylinedata_wrapper.h"
#include "generator/cpp/rraydata_wrapper.h"
#include "generator/cpp/rsoliddata_wrapper.h"
#include "generator/cpp/rsplinedata_wrapper.h"
#include "generator/cpp/rtextbaseddata_wrapper.h"
#include "generator/cpp/rtextdata_wrapper.h"
#include "generator/cpp/rtolerancedata_wrapper.h"
#include "generator/cpp/rtracedata_wrapper.h"
#include "generator/cpp/rviewportdata_wrapper.h"
#include "generator/cpp/rxlinedata_wrapper.h"
#include "generator/cpp/rdocumentvariables_wrapper.h"
#include "generator/cpp/rdimstyle_wrapper.h"
#include "generator/cpp/rblock_wrapper.h"
#include "generator/cpp/rgraphicsviewimage_wrapper.h"
#include "generator/cpp/rgraphicsviewworker_wrapper.h"
#include "generator/cpp/rpropertytypeid_wrapper.h"
#include "generator/cpp/rentitypickevent_wrapper.h"
#include "generator/cpp/rlistwidget_wrapper.h"
#include "generator/cpp/rlistview_wrapper.h"
#include "generator/cpp/rlayer_wrapper.h"
#include "generator/cpp/rlinetypepattern_wrapper.h"
#include "generator/cpp/rlinetype_wrapper.h"
#include "generator/cpp/rstorage_wrapper.h"
#include "generator/cpp/rrestrictanglelength_wrapper.h"
#include "generator/cpp/rentitydata_wrapper.h"
#include "generator/cpp/rcadtoolbar_wrapper.h"
#include "generator/cpp/rcadtoolbarpanel_wrapper.h"
#include "generator/cpp/rpatternlist_wrapper.h"
#include "generator/cpp/rpatternlistmetric_wrapper.h"
#include "generator/cpp/rpatternlistimperial_wrapper.h"
#include "generator/cpp/rpattern_wrapper.h"
#include "generator/cpp/rtextlabel_wrapper.h"
#include "generator/cpp/rpropertylisteneradapter_wrapper.h"
#include "generator/cpp/rpropertyeditor_wrapper.h"
#include "generator/cpp/rpropertyattributes_wrapper.h"
#include "generator/cpp/rpropertyevent_wrapper.h"
#include "generator/cpp/rpainterpath_wrapper.h"
#include "generator/cpp/rtransactionlisteneradapter_wrapper.h"
#include "generator/cpp/rintertransactionlisteneradapter_wrapper.h"
#include "generator/cpp/rlayout_wrapper.h"
#include "generator/cpp/rkeylisteneradapter_wrapper.h"
#include "generator/cpp/rtextrenderer_wrapper.h"
#include "generator/cpp/rgraphicsscenedrawable_wrapper.h"
#include "generator/cpp/rpreferenceslisteneradapter_wrapper.h"
#include "generator/cpp/rlayerstate_wrapper.h"
#include "generator/cpp/rviewlisteneradapter_wrapper.h"
#include "generator/cpp/rview_wrapper.h"
#include "generator/cpp/rdebug_wrapper.h"
#include "generator/cpp/rmatrix_wrapper.h"
#include "generator/cpp/rfileexporterfactoryadapter_wrapper.h"
#include "generator/cpp/rcharacterwidget_wrapper.h"
#include "generator/cpp/rsnapend_wrapper.h"
#include "generator/cpp/rrestrictanglelength_wrapper.h"
#include "generator/cpp/rrestricthorizontal_wrapper.h"
#include "generator/cpp/rrestrictoff_wrapper.h"
#include "generator/cpp/rrestrictorthogonal_wrapper.h"
#include "generator/cpp/rrestrictvertical_wrapper.h"
#include "generator/cpp/rsnapauto_wrapper.h"
#include "generator/cpp/rsnapcenter_wrapper.h"
#include "generator/cpp/rsnapdistance_wrapper.h"
#include "generator/cpp/rsnapend_wrapper.h"
#include "generator/cpp/rsnapentitybase_wrapper.h"
#include "generator/cpp/rsnapfree_wrapper.h"
#include "generator/cpp/rsnapgrid_wrapper.h"
#include "generator/cpp/rsnapintersection_wrapper.h"
#include "generator/cpp/rsnapmiddle_wrapper.h"
#include "generator/cpp/rsnaponentity_wrapper.h"
#include "generator/cpp/rsnapperpendicular_wrapper.h"
#include "generator/cpp/rsnapreference_wrapper.h"
#include "generator/cpp/rsnaptangential_wrapper.h"
#include "generator/cpp/rtransform_wrapper.h"
#include "generator/cpp/rtransformop_wrapper.h"
#include "generator/cpp/rfilesystemmodel_wrapper.h"
#include "generator/cpp/rmultioperation_wrapper.h"
#include "generator/cpp/rtoolmatrixitemdelegate_wrapper.h"
#include "generator/cpp/rspatialindexvisitoradapter_wrapper.h"
#include "generator/cpp/rwipeoutentity_wrapper.h"
#include "generator/cpp/rwipeoutdata_wrapper.h"
#include "generator/cpp/rstemmer_wrapper.h"
#include "generator/cpp/rimportlisteneradapter_wrapper.h"
#include "generator/cpp/rexportlisteneradapter_wrapper.h"

#include "RSettingsBridge.h"


class RJSQVariantConverter_qcad : public RJSQVariantConverter {
public:
    virtual QJSValue fromVariant(RJSApi& handler, const QVariant& v) {
        /*
        bool ok;
        int i = v.toInt(&ok);
        if (ok) {
            return QJSValue(i);
        }
        return QJSValue();
        */
        if (v.canConvert<RLayerListenerAdapter*>()) {
            return RJSHelper_qcad::cpp2js_RLayerListenerAdapter(handler, v.value<RLayerListenerAdapter*>());
        }
        if (v.canConvert<RAction*>()) {
            return RJSHelper_qcad::cpp2js_RAction(handler, v.value<RAction*>());
        }
        if (v.canConvert<RActionAdapter*>()) {
            return RJSHelper_qcad::cpp2js_RActionAdapter(handler, v.value<RActionAdapter*>());
        }
        if (v.canConvert<RColor>()) {
            return RJSHelper_qcad::cpp2js_RColor(handler, v.value<RColor>());
        }
        if (v.canConvert<RVector>()) {
            return RJSHelper_qcad::cpp2js_RVector(handler, v.value<RVector>());
        }
        if (v.canConvert<RLineweight::Lineweight>()) {
            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(handler, v.value<RLineweight::Lineweight>());
        }
        if (v.canConvert<RPropertyTypeId>()) {
            return RJSHelper_qcad::cpp2js_RPropertyTypeId(handler, v.value<RPropertyTypeId>());
        }
        if (v.canConvert<RLinetypePattern>()) {
            return RJSHelper_qcad::cpp2js_RLinetypePattern(handler, v.value<RLinetypePattern>());
        }

        return QJSValue();
    }

    virtual QVariant toVariant(RJSApi& handler, const QJSValue& v) {
        /*
        if (v.isNumber()) {
            return QVariant(v.toInt());
        }
        return QVariant();
        */

        RJSWrapper* wrapper = getWrapperRJSWrapper(v);
        if (wrapper==nullptr) {
            return QVariant();
        }

        int t = wrapper->getWrappedType();

        if (t==RJSType_RMainWindowQt::getIdStatic()) {
            return QVariant::fromValue(RJSHelper_qcad::js2cpp_RMainWindowQt_ptr(handler, v));
        }
        if (t==RJSType_RAction::getIdStatic()) {
            return QVariant::fromValue(RJSHelper_qcad::js2cpp_RAction_ptr(handler, v));
        }
        if (t==RJSType_RActionAdapter::getIdStatic()) {
            return QVariant::fromValue(RJSHelper_qcad::js2cpp_RActionAdapter_ptr(handler, v));
        }
        if (t==RJSType_RLayerListenerAdapter::getIdStatic()) {
            return QVariant::fromValue(RJSHelper_qcad::js2cpp_RLayerListenerAdapter_ptr(handler, v));
        }
        if (t==RJSType_RVector::getIdStatic()) {
            return QVariant::fromValue(RJSHelper_qcad::js2cpp_RVector(handler, v));
        }
        if (t==RJSType_RColor::getIdStatic()) {
            return QVariant::fromValue(RJSHelper_qcad::js2cpp_RColor(handler, v));
        }
        if (t==RJSType_RPropertyTypeId::getIdStatic()) {
            return QVariant::fromValue(RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, v));
        }
        if (t==RJSType_RLinetypePattern::getIdStatic()) {
            return QVariant::fromValue(RJSHelper_qcad::js2cpp_RLinetypePattern(handler, v));
        }

        return QVariant();
    }
};


RScriptHandlerJs::RScriptHandlerJs() : rjsapi(NULL), engine(NULL) {

}


RScriptHandlerJs::~RScriptHandlerJs() {
    // qDebug() << "RScriptHandlerJs::~RScriptHandlerJs";
    //if (engine->hasUncaughtException()) {
    //    qWarning() << "At least one uncaught exception:";
    //}

//    if (engine->isEvaluating()) {
//        qWarning() << "Deleting script engine that is still evaluating.";
//    }
    // collect garbage... (objects are scheduled for removal, not removed):
    // qDebug() << "collect garbage...";
    engine->collectGarbage();
    //QCoreApplication::processEvents();
    // qDebug() << "collect garbage: DONE";

    //QVariant v = engine->property("__to_delete__");
    //RMdiArea_Wrapper* w = v.value<RMdiArea_Wrapper*>();
    //delete w;

    RDebug::printCounters();

    // delete wrappers:
    // qDebug() << "deleting wrappers (" + engine->objectName() + "): " << wrappers.size();
    // TODO: crashes:
    //QtConcurrent::blockingMap(RS::toList<RJSWrapperObj*>(wrappers), RScriptHandlerJs::deleteWrapper);
    QSetIterator<RJSWrapperObj*> i(wrappers);
    while (i.hasNext()) {
        RJSWrapperObj* wrapper = i.next();

        if (!wrapper->isCppOwnership()) {
            continue;
        }

        //qDebug() << "deleting wrapper:" << RJSType::getTypeName(wrapper->getWrappedType());
        delete wrapper;
    }
    wrappers.clear();
    // qDebug() << "deleting wrappers: DONE" ;

    // qDebug() << "collect garbage...";
    engine->collectGarbage();
    // objects are deleted here:
    if (RSettings::isGuiEnabled()) {
        QCoreApplication::processEvents(QEventLoop::ExcludeUserInputEvents);
    }
    // qDebug() << "collect garbage: DONE";

    delete rjsapi;

    // qDebug() << "delete engine:" << (unsigned long long int)engine << "...";
    delete engine;
    engine = nullptr;
    // qDebug() << "delete engine:" << (unsigned long long int)engine << " DONE";
}

void RScriptHandlerJs::deleteWrapper(RJSWrapperObj* wrapper) {
    // qDebug() << "deleting wrapper: " << (unsigned long long int)wrapper;
    delete wrapper;
}

void RScriptHandlerJs::init(bool main) {
    //static int counter = 0;

    //qDebug() << "RScriptHandlerJs::init";

    // TODO: use QQmlApplicationEngine to allow mixing QML / JS:
    //engine = new QJSEngine();
    engine = new QQmlApplicationEngine();

    rjsapi = new RJSApi(engine);
    tools = rjsapi->getTools();

    //qDebug() << "script engine:" << engine->objectName();

    //RVector_Wrapper::init(*rjsapi);

    // already installed by RJSApi:
    //engine->installExtensions(QJSEngine::AllExtensions);

    QJSValue global = engine->globalObject();

    /*
    global.setProperty("global", global);

    global.setProperty("engine", engine->newQObject(engine));
    QQmlEngine::setObjectOwnership(engine, QQmlEngine::CppOwnership);

    global.setProperty("handler", engine->newQObject(this));
    QQmlEngine::setObjectOwnership(this, QQmlEngine::CppOwnership);

    tools = new RJSTools(*this);
    global.setProperty("tools", engine->newQObject(tools));
    QQmlEngine::setObjectOwnership(tools, QQmlEngine::CppOwnership);
    engine->evaluate("function include(fileName) { tools.include(fileName); } ");
    engine->evaluate("function isDeleted(obj) { return tools.isDeleted(obj); } ");
    engine->evaluate("function download(url, timeout) { return tools.download(url, timeout); } ");
    engine->evaluate("function downloadToFile(url, path, fileName, timeout) { return tools.downloadToFile(url, path, fileName, timeout); } ");
    // Array.prototype.slice.apply converts arguments into an array:
    engine->evaluate("function print() { tools.print(Array.prototype.slice.apply(arguments)); } ");
    engine->evaluate("function qDebug() { tools.debug(Array.prototype.slice.apply(arguments)); } ");
    engine->evaluate("function qWarning() { tools.warning(Array.prototype.slice.apply(arguments)); } ");
    */

    //RSingleApplication* app = dynamic_cast<RSingleApplication*>(qApp);
    RSingleApplication_Wrapper* app = new RSingleApplication_Wrapper(*rjsapi, dynamic_cast<RSingleApplication*>(qApp), false);
    global.setProperty("qApp", engine->newQObject(app));
    QQmlEngine::setObjectOwnership(app, QQmlEngine::CppOwnership);

    RS_Wrapper::init(*rjsapi);
    //RJSType_Wrapper::init(*rjsapi);
    RPropertyTypeId_Wrapper::init(*rjsapi);
    RDocument_Wrapper::init(*rjsapi);
    RMainWindowQt_Wrapper::init(*rjsapi);
    RPluginLoader_Wrapper::init(*rjsapi);
    RSettings_Wrapper::init(*rjsapi);
    RSpatialIndexSimple_Wrapper::init(*rjsapi);
    RMemoryStorage_Wrapper::init(*rjsapi);
    RVector_Wrapper::init(*rjsapi);
    RFont_Wrapper::init(*rjsapi);
    RFontList_Wrapper::init(*rjsapi);
    RPluginInterface_Wrapper::init(*rjsapi);
    RFileCache_Wrapper::init(*rjsapi);
    RColorCombo_Wrapper::init(*rjsapi);
    RComboBox_Wrapper::init(*rjsapi);
    RLineweightCombo_Wrapper::init(*rjsapi);
    RLinetypeCombo_Wrapper::init(*rjsapi);
    RPluginInfo_Wrapper::init(*rjsapi);
    REventFilter_Wrapper::init(*rjsapi);
    RToolOptionEventFilter_Wrapper::init(*rjsapi);
    RSingleApplication_Wrapper::init(*rjsapi);
    RAction_Wrapper::init(*rjsapi);
    RActionAdapter_Wrapper::init(*rjsapi);
    RColor_Wrapper::init(*rjsapi);
    RUnit_Wrapper::init(*rjsapi);
    RTreeWidget_Wrapper::init(*rjsapi);
    RWidget_Wrapper::init(*rjsapi);
    RGuiAction_Wrapper::init(*rjsapi);
    RDockWidget_Wrapper::init(*rjsapi);
    RFlowLayout_Wrapper::init(*rjsapi);
    RViewFocusListenerAdapter_Wrapper::init(*rjsapi);
    RBlockListenerAdapter_Wrapper::init(*rjsapi);
    RCommandLine_Wrapper::init(*rjsapi);
    RMathLineEdit_Wrapper::init(*rjsapi);
    RMathComboBox_Wrapper::init(*rjsapi);
    RPenListenerAdapter_Wrapper::init(*rjsapi);
    RMdiArea_Wrapper::init(*rjsapi);
    RPaletteListenerAdapter_Wrapper::init(*rjsapi);
    RFocusListenerAdapter_Wrapper::init(*rjsapi);
    RDocumentInterface_Wrapper::init(*rjsapi);
    RGraphicsViewQt_Wrapper::init(*rjsapi);
    RGraphicsSceneQt_Wrapper::init(*rjsapi);
    RPropertyEditor_Wrapper::init(*rjsapi);
    REntity_Wrapper::init(*rjsapi);
    RLayerListenerAdapter_Wrapper::init(*rjsapi);
    RSelectionListenerAdapter_Wrapper::init(*rjsapi);
    RAutoLoadJs_Wrapper::init(*rjsapi);
    RToolButton_Wrapper::init(*rjsapi);
    RCoordinateListenerAdapter_Wrapper::init(*rjsapi);
    RMdiChildQt_Wrapper::init(*rjsapi);
    RSpatialIndexNavel_Wrapper::init(*rjsapi);
    //RSpatialIndexPro_Wrapper::init(*rjsapi);
    ROrthoGrid_Wrapper::init(*rjsapi);
    RRulerQt_Wrapper::init(*rjsapi);
    REventHandler_Wrapper::init(*rjsapi);
    RGrid_Wrapper::init(*rjsapi);
    RCommandEvent_Wrapper::init(*rjsapi);
    RMath_Wrapper::init(*rjsapi);
    RFontChooserWidget_Wrapper::init(*rjsapi);
    RFileImporterRegistry_Wrapper::init(*rjsapi);
    RFileExporterRegistry_Wrapper::init(*rjsapi);
    RCloseCurrentEvent_Wrapper::init(*rjsapi);
    RMouseEvent_Wrapper::init(*rjsapi);
    RDxfServices_Wrapper::init(*rjsapi);
    RClipboardOperation_Wrapper::init(*rjsapi);
    RPasteOperation_Wrapper::init(*rjsapi);
    RPolyline_Wrapper::init(*rjsapi);
    RSnapAuto_Wrapper::init(*rjsapi);
    RSnapFree_Wrapper::init(*rjsapi);
    RRestrictOff_Wrapper::init(*rjsapi);
    RSnapGrid_Wrapper::init(*rjsapi);
    RGraphicsView_Wrapper::init(*rjsapi);
    RSnap_Wrapper::init(*rjsapi);
    RCoordinateEvent_Wrapper::init(*rjsapi);
    RSnapRestriction_Wrapper::init(*rjsapi);
    RTransaction_Wrapper::init(*rjsapi);
    RRefPoint_Wrapper::init(*rjsapi);
    RObject_Wrapper::init(*rjsapi);
    RBlockReferenceEntity_Wrapper::init(*rjsapi);
    RBox_Wrapper::init(*rjsapi);
    RLineweight_Wrapper::init(*rjsapi);
    RWheelEvent_Wrapper::init(*rjsapi);
    RTextEntity_Wrapper::init(*rjsapi);
    RAddObjectOperation_Wrapper::init(*rjsapi);
    RAddObjectsOperation_Wrapper::init(*rjsapi);
    RChangePropertyOperation_Wrapper::init(*rjsapi);
    RClickReferencePointOperation_Wrapper::init(*rjsapi);
    RClipboardOperation_Wrapper::init(*rjsapi);
    RCopyOperation_Wrapper::init(*rjsapi);
    RDeleteAllEntitiesOperation_Wrapper::init(*rjsapi);
    RDeleteObjectOperation_Wrapper::init(*rjsapi);
    RDeleteObjectsOperation_Wrapper::init(*rjsapi);
    RDeleteSelectionOperation_Wrapper::init(*rjsapi);
    RMixedOperation_Wrapper::init(*rjsapi);
    RModifyObjectOperation_Wrapper::init(*rjsapi);
    RModifyObjectsOperation_Wrapper::init(*rjsapi);
    RMoveReferencePointOperation_Wrapper::init(*rjsapi);
    RMoveSelectionOperation_Wrapper::init(*rjsapi);
    ROperationUtils_Wrapper::init(*rjsapi);
    RPasteOperation_Wrapper::init(*rjsapi);
    RScaleSelectionOperation_Wrapper::init(*rjsapi);
    RTransformation_Wrapper::init(*rjsapi);
    RTranslation_Wrapper::init(*rjsapi);
    RGraphicsScene_Wrapper::init(*rjsapi);
    RFileImporterFactoryAdapter_Wrapper::init(*rjsapi);
    RFileImporterAdapter_Wrapper::init(*rjsapi);
    RFileExporterAdapter_Wrapper::init(*rjsapi);
    RPoint_Wrapper::init(*rjsapi);
    RMessageHandler_Wrapper::init(*rjsapi);
    RProgressHandler_Wrapper::init(*rjsapi);
    RLine_Wrapper::init(*rjsapi);
    RArc_Wrapper::init(*rjsapi);
    REllipse_Wrapper::init(*rjsapi);
    RCircle_Wrapper::init(*rjsapi);
    RShape_Wrapper::init(*rjsapi);
    RSpline_Wrapper::init(*rjsapi);
    RRay_Wrapper::init(*rjsapi);
    RXLine_Wrapper::init(*rjsapi);
    RTriangle_Wrapper::init(*rjsapi);
    RDocumentVariables_Wrapper::init(*rjsapi);
    RDimStyle_Wrapper::init(*rjsapi);
    RBlock_Wrapper::init(*rjsapi);
    RGraphicsViewImage_Wrapper::init(*rjsapi);
    RGraphicsViewWorker_Wrapper::init(*rjsapi);
    REntityPickEvent_Wrapper::init(*rjsapi);
    RListWidget_Wrapper::init(*rjsapi);
    RListView_Wrapper::init(*rjsapi);
    RLayer_Wrapper::init(*rjsapi);
    RRestrictAngleLength_Wrapper::init(*rjsapi);
    REntityData_Wrapper::init(*rjsapi);
    RCadToolBar_Wrapper::init(*rjsapi);
    RCadToolBarPanel_Wrapper::init(*rjsapi);
    RPatternList_Wrapper::init(*rjsapi);
    RPatternListMetric_Wrapper::init(*rjsapi);
    RPatternListImperial_Wrapper::init(*rjsapi);
    RPattern_Wrapper::init(*rjsapi);
    RTextEdit_Wrapper::init(*rjsapi);
    RTextLabel_Wrapper::init(*rjsapi);
    RPropertyListenerAdapter_Wrapper::init(*rjsapi);
    RPropertyEditor_Wrapper::init(*rjsapi);
    RPropertyAttributes_Wrapper::init(*rjsapi);
    RPropertyEvent_Wrapper::init(*rjsapi);
    RPreferencesListenerAdapter_Wrapper::init(*rjsapi);
    RPainterPath_Wrapper::init(*rjsapi);
    RTransactionListenerAdapter_Wrapper::init(*rjsapi);
    RInterTransactionListenerAdapter_Wrapper::init(*rjsapi);
    RKeyListenerAdapter_Wrapper::init(*rjsapi);
    RGraphicsSceneDrawable_Wrapper::init(*rjsapi);
    RViewListenerAdapter_Wrapper::init(*rjsapi);
    RView_Wrapper::init(*rjsapi);
    RDebug_Wrapper::init(*rjsapi);
    RMatrix_Wrapper::init(*rjsapi);
    RFileExporterFactoryAdapter_Wrapper::init(*rjsapi);
    RCharacterWidget_Wrapper::init(*rjsapi);
    RTransform_Wrapper::init(*rjsapi);
    RTransformOp_Wrapper::init(*rjsapi);
    RFileSystemModel_Wrapper::init(*rjsapi);
    RToolMatrixItemDelegate_Wrapper::init(*rjsapi);
    RSpatialIndexVisitorAdapter_Wrapper::init(*rjsapi);
    RImportListenerAdapter_Wrapper::init(*rjsapi);
    RExportListenerAdapter_Wrapper::init(*rjsapi);
    RMultiOperation_Wrapper::init(*rjsapi);

    RArcEntity_Wrapper::init(*rjsapi);
    RAttributeDefinitionEntity_Wrapper::init(*rjsapi);
    RAttributeEntity_Wrapper::init(*rjsapi);
    RBlockReferenceEntity_Wrapper::init(*rjsapi);
    RCircleEntity_Wrapper::init(*rjsapi);
    RDimAlignedEntity_Wrapper::init(*rjsapi);
    RDimAngular2LEntity_Wrapper::init(*rjsapi);
    RDimAngular3PEntity_Wrapper::init(*rjsapi);
    RDimAngularEntity_Wrapper::init(*rjsapi);
    RDimArcLengthEntity_Wrapper::init(*rjsapi);
    RDimDiametricEntity_Wrapper::init(*rjsapi);
    RDimLinearEntity_Wrapper::init(*rjsapi);
    RDimOrdinateEntity_Wrapper::init(*rjsapi);
    RDimRadialEntity_Wrapper::init(*rjsapi);
    RDimRotatedEntity_Wrapper::init(*rjsapi);
    RDimensionEntity_Wrapper::init(*rjsapi);
    REllipseEntity_Wrapper::init(*rjsapi);
    RFaceEntity_Wrapper::init(*rjsapi);
    RHatchEntity_Wrapper::init(*rjsapi);
    RImageEntity_Wrapper::init(*rjsapi);
    RLeaderEntity_Wrapper::init(*rjsapi);
    RLineEntity_Wrapper::init(*rjsapi);
    RPointEntity_Wrapper::init(*rjsapi);
    RPolylineEntity_Wrapper::init(*rjsapi);
    RRayEntity_Wrapper::init(*rjsapi);
    RSolidEntity_Wrapper::init(*rjsapi);
    RSplineEntity_Wrapper::init(*rjsapi);
    RTextBasedEntity_Wrapper::init(*rjsapi);
    RTextEntity_Wrapper::init(*rjsapi);
    RToleranceEntity_Wrapper::init(*rjsapi);
    RTraceEntity_Wrapper::init(*rjsapi);
    RViewportEntity_Wrapper::init(*rjsapi);
    RXLineEntity_Wrapper::init(*rjsapi);
    RWipeoutEntity_Wrapper::init(*rjsapi);

    RArcData_Wrapper::init(*rjsapi);
    RAttributeDefinitionData_Wrapper::init(*rjsapi);
    RAttributeData_Wrapper::init(*rjsapi);
    RBlockReferenceData_Wrapper::init(*rjsapi);
    RCircleData_Wrapper::init(*rjsapi);
    RDimAlignedData_Wrapper::init(*rjsapi);
    RDimAngular2LData_Wrapper::init(*rjsapi);
    RDimAngular3PData_Wrapper::init(*rjsapi);
    RDimAngularData_Wrapper::init(*rjsapi);
    RDimArcLengthData_Wrapper::init(*rjsapi);
    RDimDiametricData_Wrapper::init(*rjsapi);
    RDimLinearData_Wrapper::init(*rjsapi);
    RDimOrdinateData_Wrapper::init(*rjsapi);
    RDimRadialData_Wrapper::init(*rjsapi);
    RDimRotatedData_Wrapper::init(*rjsapi);
    RDimensionData_Wrapper::init(*rjsapi);
    REllipseData_Wrapper::init(*rjsapi);
    RFaceData_Wrapper::init(*rjsapi);
    RHatchData_Wrapper::init(*rjsapi);
    RImageData_Wrapper::init(*rjsapi);
    RLeaderData_Wrapper::init(*rjsapi);
    RLineData_Wrapper::init(*rjsapi);
    RPointData_Wrapper::init(*rjsapi);
    RPolylineData_Wrapper::init(*rjsapi);
    RRayData_Wrapper::init(*rjsapi);
    RSolidData_Wrapper::init(*rjsapi);
    RSplineData_Wrapper::init(*rjsapi);
    RTextBasedData_Wrapper::init(*rjsapi);
    RTextData_Wrapper::init(*rjsapi);
    RToleranceData_Wrapper::init(*rjsapi);
    RTraceData_Wrapper::init(*rjsapi);
    RViewportData_Wrapper::init(*rjsapi);
    RXLineData_Wrapper::init(*rjsapi);
    RWipeoutData_Wrapper::init(*rjsapi);


    RLinetypePattern_Wrapper::init(*rjsapi);
    RLinetype_Wrapper::init(*rjsapi);
    RStorage_Wrapper::init(*rjsapi);
    RLayout_Wrapper::init(*rjsapi);
    RTextRenderer_Wrapper::init(*rjsapi);
    RLayerState_Wrapper::init(*rjsapi);

    RRestrictAngleLength_Wrapper::init(*rjsapi);
    RRestrictHorizontal_Wrapper::init(*rjsapi);
    RRestrictOff_Wrapper::init(*rjsapi);
    RRestrictOrthogonal_Wrapper::init(*rjsapi);
    RRestrictVertical_Wrapper::init(*rjsapi);

    RSnapAuto_Wrapper::init(*rjsapi);
    RSnapCenter_Wrapper::init(*rjsapi);
    RSnapDistance_Wrapper::init(*rjsapi);
    RSnapEnd_Wrapper::init(*rjsapi);
    RSnapEntityBase_Wrapper::init(*rjsapi);
    RSnapFree_Wrapper::init(*rjsapi);
    RSnapGrid_Wrapper::init(*rjsapi);
    RSnapIntersection_Wrapper::init(*rjsapi);
    RSnapMiddle_Wrapper::init(*rjsapi);
    RSnapOnEntity_Wrapper::init(*rjsapi);
    RSnapPerpendicular_Wrapper::init(*rjsapi);
    RSnapReference_Wrapper::init(*rjsapi);
    RSnapTangential_Wrapper::init(*rjsapi);

    RStemmer_Wrapper::init(*rjsapi);

    // init downcasts:
    RJSHelper_qcad::registerDowncasters();
    RJSHelper_qcad::registerBasecasters();
    //RJSHelper_qcad::registerQVariantConverters();

    //RJSHelper::registerQVariantConverter(new RJSQVariantConverter_RColor());
    RJSHelper::registerQVariantConverter(new RJSQVariantConverter_qcad());

    QQmlContext* context = engine->rootContext();
    context->setContextProperty("RSettingsBridge", RSettingsBridge::instance());

    // give plugins a chance to initialize their script extensions:
    RPluginLoader::initScriptExtensions(*this);

    /*
    {
        QString fileName = ":fixes.js";
        QFile scriptFile(fileName);
        if (scriptFile.open(QIODevice::ReadOnly)) {
            QTextStream stream(&scriptFile);
            QString contents = stream.readAll();
            scriptFile.close();
            QJSValue result = engine->evaluate(contents, fileName);
            if (result.isError()) {
                qWarning()
                        << "Uncaught exception at line"
                        << result.property("lineNumber").toInt()
                        << ":" << result.toString();
            }
        }
    }
    */

    //QWidget_Wrapper::registerBasecaster_QWidget(bc);

    // eval auto load scripts:
    QStringList files = RAutoLoadJs::getAutoLoadFiles();
    qDebug() << "auto load files:" << files;
    for (int i=0; i<files.size(); i++) {
        doScript(files[i]);
    }

    // give plugins a chance to initialize their script extensions:
    //RPluginLoader::initScriptExtensions(*engine);

    // eval auto load scripts:
//    QStringList files = RAutoLoadJs::getAutoLoadFiles();
//    for (int i=0; i<files.size(); i++) {
//        doScript(files[i]);
//    }
}

RScriptHandler* RScriptHandlerJs::factory() {
    RScriptHandlerJs* ret = new RScriptHandlerJs();
    //ret->init();
    return ret;
}

QList<QString> RScriptHandlerJs::getSupportedFileExtensionsStatic() {
    QList<QString> ret;
    ret.push_back("js");
    return ret;
}

QList<QString> RScriptHandlerJs::getSupportedFileExtensions() {
    return getSupportedFileExtensionsStatic();
}

bool RScriptHandlerJs::isRunning() {
    //return engine->isEvaluating();
    return false;
}

void RScriptHandlerJs::abort() {
    //engine->abortEvaluation();
}

bool RScriptHandlerJs::hasUncaughtExceptions() {
    //return engine->hasUncaughtException();
    return false;
}

/**
 * \todo move to RScriptHandler
 */
void RScriptHandlerJs::doScript(const QString& scriptFile, const QStringList& arguments) {
    QFileInfo fi(scriptFile);
    if (!fi.exists()) {
        qWarning()
            << QString("RScriptHandlerJs::doScript: "
                "file '%1' does not exist").arg(scriptFile);
        return;
    }

    if (tools->isIncluded(fi.completeBaseName())) {
        return;
    }

    QJSValue globalObject = engine->globalObject();
    initGlobalVariables(scriptFile);
    if (!arguments.isEmpty()) {
        // set global variable args to (command line) arguments:
        globalObject.setProperty("args", RJSHelper::cpp2js_QStringList(*rjsapi, arguments));
    }

    QString contents = RFileCache::getContents(scriptFile, false);
    QStringList trace;
    QJSValue result = engine->evaluate(contents, scriptFile, 1, &trace);

    if (result.isError()) {
        qWarning() << "Uncaught exception in:" << scriptFile;
        qWarning() << "Exception:" << result.toString();
        for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
        }
//                 << "\nname: '" << result.property("name").toString() << "'"
//                 << "\nfileName: '"  << result.property("fileName").toString() << "'"
//                 << "\nline: " << result.property("lineNumber").toInt()
//                 << "\nmessage: '" << result.property("message").toString() << "'"
//                 << "\nstack:" << result.property("stack").toString();
    }

    tools->markIncluded(fi.completeBaseName());
}

QVariant RScriptHandlerJs::eval(const QString& script, const QString& fileName) {
    QJSValue ret = evalInternal(script, fileName);
    return ret.toVariant();
}

QJSValue RScriptHandlerJs::evalInternal(const QString& script, const QString& fileName) {
    QStringList trace;
    QJSValue ret = engine->evaluate(script, fileName, 1, &trace);
    if (ret.isError()) {
        qWarning() << "RScriptHandlerJs::eval: script engine exception in file" << fileName <<  ":" << ret.toString();
        qWarning() << "RScriptHandlerJs::eval: script:" << script;
        //engine->evaluate("console.trace();");
        for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
        }
    }
    return ret;
}

QVariant RScriptHandlerJs::evalGlobal(const QString& script, const QString& fileName) {
//    QScriptContext* context = engine->currentContext();
//    context->setActivationObject(engine->globalObject());
//    context->setThisObject(engine->globalObject());

//    QScriptValue err = engine->evaluate(script, fileName);
//    return err.toVariant();
//    return QVariant();

    QJSValue err = engine->evaluate(script, fileName);
    if (err.isError()) {
        qWarning() << "RScriptHandlerJs::eval: script engine exception:"
                   << err.toString();
    }
    // convert QJSValue to string, then to variant (for output in script shell):
    return QVariant(err.toString());
}

RFileImporterAdapter* RScriptHandlerJs::createFileImporter(const QString& className, RDocument& document) {
//    QScriptValue globalObject = engine->globalObject();

//    // get script class:
//    QScriptValue clazz = globalObject.property(className);

//    // instantiate (call constructor):
//    QScriptValue argument = qScriptValueFromValue(engine, &document);
//    QScriptValue obj = clazz.construct(QScriptValueList() << argument);

//    // return:
//    RFileImporterAdapter* imp = RJsHelper::scriptValueTo<RFileImporterAdapter>(obj);
//    return imp;
    return NULL;
}

/**
 * \return The pre-processed contents of the given file with all includes resolved.
 */
//QString RScriptHandlerJs::readScript(const QString& fileName, bool forceReload) {

//    return RFileCache::getContents(fileName, forceReload);

//    QFile f(fileName);
//    if (!f.open(QIODevice::ReadOnly)) {
//        qWarning() << "RScriptHandlerJs::readScript: cannot read file: " << fileName;
//        return QString();
//    }

//    QString ret = f.readAll();
//    f.close();
//    return ret;
//}

void RScriptHandlerJs::createActionDocumentLevel(const QString& scriptFile,
        RGuiAction* guiAction, RDocumentInterface* documentInterface) {

    /*
    if (engine->isEvaluating()) {
//        qWarning() << "RScriptHandlerJs::createActionDocumentLevel(): "
//                   << scriptFile
//                   << ": Engine is busy. Aborting...";
        if (guiAction==NULL || !guiAction->getAllowInterrupt()) {
            return;
        }
    }
    */

    if (guiAction==NULL) {
        qWarning() << "RScriptHandlerJs::createActionDocumentLevel(): "
                   << "guiAction is NULL";
    }

    if (documentInterface == NULL) {
        documentInterface = RMainWindow::getDocumentInterfaceStatic();
    }
    if (documentInterface == NULL) {
        qWarning() << "RScriptHandlerJs::createActionDocumentLevel(): "
                   << scriptFile
                   << ": No document interface given or found.";
        return;
    }

    if (!QFileInfo(scriptFile).exists()) {
        qWarning() << "RScriptHandlerJs::createActionDocumentLevel(): "
                   << scriptFile
                   << ": file not found.";
        //getScriptEngine().currentContext()->throwError(QString(
        //        "File %1 does not exists.").arg(scriptFile));
        return;
    }

    //engine->collectGarbage();

    doScript(scriptFile);

    QString className = QFileInfo(scriptFile).completeBaseName();
    QJSValue globalObject = engine->globalObject();

    globalObject.setProperty("__ga__", RJSHelper_qcad::cpp2js_RGuiAction(*rjsapi, guiAction));
    globalObject.setProperty("__di__", RJSHelper_qcad::cpp2js_RDocumentInterface(*rjsapi, documentInterface));

    //eval("qDebug('__di__:' + __di__)");
    //qDebug() << "__di__.setCurrentAction...";
    eval("var __a__ = new " + className + "(__ga__);");
    //eval("qDebug('di 0:' + __a__.getDocumentInterface());");
    //eval("__a__.setDocumentInterface(__di__);");
    //eval("qDebug('di set:' + __a__.getDocumentInterface());");

    eval("__di__.setCurrentAction(__a__);");
    //qDebug() << "__di__.setCurrentAction: DONE";

    //qDebug() << "__a__.getDocumentInterface...";
    //eval("qDebug('di:' + __a__.getDocumentInterface());");
    //qDebug() << "__a__.getDocumentInterface: DONE";
}

void RScriptHandlerJs::createActionApplicationLevel(
        const QString& scriptFile, RGuiAction* guiAction) {

    if (!QFileInfo(scriptFile).exists()) {
//        engine->currentContext()->throwError(QString(
//                "File %1 does not exists.").arg(scriptFile));
        return;
    }

//    engine->currentContext()->setActivationObject(engine->globalObject());

    doScript(scriptFile);

    QString className = QFileInfo(scriptFile).completeBaseName();

    QJSValue globalObject = engine->globalObject();

    globalObject.setProperty("guiAction", RJSHelper_qcad::cpp2js_RGuiAction(*rjsapi, guiAction));

    QJSValue a = evalInternal("new " + className + "(guiAction);");
    globalObject.setProperty("__a__", a);
    eval("if (typeof(__a__.beginEvent)===\"function\") __a__.beginEvent();");
    globalObject.setProperty("__a__", a);
    eval("if (typeof(__a__.finishEvent)===\"function\") __a__.finishEvent();");
    globalObject.setProperty("__a__", a);
    eval("destr(__a__);");
}

/**
 * Initializes some global JS variables that are available to all scripts.
 */
void RScriptHandlerJs::initGlobalVariables(const QString& scriptFile) {
    // initialize global JS variables:
    QJSValue globalObject = engine->globalObject();
    globalObject.setProperty("scriptFile", QJSValue(scriptFile));
    globalObject.setProperty("includeBasePath", QJSValue(QFileInfo(scriptFile).absolutePath()));
    globalObject.setProperty("scriptFileBasePath", QJSValue(QFileInfo(scriptFile).absolutePath()));
}

void RScriptHandlerJs::registerWrapper(RJSWrapperObj& obj) {
    static int counter = 0;

    // keep track of CPP owned objects
    // this is important, to make sure forwarded signals are disconnected properly
    if (!obj.isCppOwnership()) {
        return;
    }
//    qDebug() << "RScriptHandlerJs::registerWrapper [" << engine->objectName() << "]: type" << obj.getWrappedType();
//    qDebug() << "RScriptHandlerJs::registerWrapper [" << engine->objectName() << "]: count: " << wrappers.count();

//    if (obj.getWrappedType()==RJSType::RPropertyTypeId_Type) {
//        RDebug::printBacktrace();
//    }

//    RDebug::startTimer(123);
//    if (wrappers.contains(&obj)) {
//        qWarning() << "RScriptHandlerJs::registerWrapper: wrapper already registered";
//        RDebug::printBacktrace();
//    }
//    RDebug::stopTimer(123, QString("wrappers.contains ") + engine->objectName());

//    if (counter++>1000) {
//        QMap<int, int> sum;
//        QSet<RJSWrapperObj*>::iterator it;
//        for (it=wrappers.begin(); it!=wrappers.end(); it++) {
//            if (!sum.contains((*it)->getWrappedType())) {
//                sum[(*it)->getWrappedType()] = 0;
//            }
//            sum[(*it)->getWrappedType()]++;

////            if ((*it)->getWrappedType()==RJSType::QObject_Type) {
////                void* vp = (*it)->getWrappedVoid();
////                if (vp!=nullptr) {
////                    QObject* ret = (QObject*)vp;
////                    if (ret!=nullptr) {
////                        qDebug() << "QObject name: " << ret->objectName();
////                    }
////                }
////            }
//        }
//        counter = 0;

////        if (sum[RJSType::QObject_Type]>1000) {
////            QSet<RJSWrapperObj*>::iterator it;
////            for (it=wrappers.begin(); it!=wrappers.end(); it++) {
////                if ((*it)->getWrappedType()==RJSType::QObject_Type) {
////                    wrappers.remove(*it);
////                    delete (*it);
////                }
////            }
////        }

////        QMap<int, int>::iterator it2;
////        for (it2=sum.begin(); it2!=sum.end(); it2++) {
////            qDebug() << "wrappers: type:" << RJSType::getTypeName(it2.key());
////            qDebug() << "wrappers: num:" << it2.value();
////        }
//        //RDebug::printCounters();
//    }


    //    RDebug::startTimer(123);
        wrappers.insert(&obj);
    //    RDebug::stopTimer(123, QString("wrappers.insert ") + engine->objectName());


}

void RScriptHandlerJs::unregisterWrapper(RJSWrapperObj& obj) {
    if (!obj.isCppOwnership()) {
        return;
    }
    //RDebug::startTimer(123);
    wrappers.remove(&obj);
    //RDebug::stopTimer(123, QString("wrappers.remove ") + engine->objectName());
}

void RScriptHandlerJs::slotDestroyed(QObject* obj) {
    //qDebug() << "destroying QObject:" << obj << " name: " << obj->objectName() << " addr: "<< (unsigned long long int)obj;
}

#include "moc_RScriptHandlerJs.cpp"
