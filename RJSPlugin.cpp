#include <QtPlugin>

#include "RJSPlugin.h"
#include "RSettings.h"
#include "RScriptHandlerRegistry.h"
#include "RScriptHandler.h"
#include "RScriptHandlerJs.h"

bool RJSPlugin::init() {
#ifdef QT_DEBUG
    qDebug() << "RJSPlugin::init";
#endif

    QList<QString> ext;
    ext.append("js");
    RScriptHandlerRegistry::registerScriptHandler(RScriptHandlerJs::factory, ext);

    return true;
}

RPluginInfo RJSPlugin::getPluginInfo() {
    RPluginInfo ret;
    ret.set("Version", QString("%1").arg(RSettings::getVersionString()));
    ret.set("ID", "QCADJSAPI");
    ret.set("Name", "QCAD");
    ret.set("Description", "QJSEngine bindings for QCAD.");
    ret.set("License", "GPLv3");
    ret.set("URL", "http://www.qcad.org");
    return ret;
}

#if QT_VERSION < 0x050000
QT_BEGIN_NAMESPACE
Q_EXPORT_PLUGIN2(qcadjs, RJSPlugin)
QT_END_NAMESPACE
#endif
