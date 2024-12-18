#include <QtPlugin>

#include "RJSApiPlugin.h"
#include "RSettings.h"
#include "RScriptHandlerRegistry.h"
#include "RScriptHandler.h"
#include "RScriptHandlerJs.h"

bool RJSApiPlugin::init() {
    qDebug() << "RJSApiPlugin::init";

    QList<QString> ext;
    ext.append("js");
    RScriptHandlerRegistry::registerScriptHandler(RScriptHandlerJs::factory, ext);

    return true;
}

RPluginInfo RJSApiPlugin::getPluginInfo() {
    RPluginInfo ret;
    ret.set("Version", QString("%1").arg(RSettings::getVersionString()));
    ret.set("ID", "JSAPI");
    ret.set("Name", "QCAD");
    ret.set("Description", "QJSEngine bindings for QCAD.");
    ret.set("License", "GPLv3");
    ret.set("URL", "http://www.qcad.org");
    return ret;
}

#include "moc_RJSApiPlugin.cpp"

#if QT_VERSION < 0x050000
QT_BEGIN_NAMESPACE
Q_EXPORT_PLUGIN2(qcadjs, RJSApiPlugin)
QT_END_NAMESPACE
#endif
