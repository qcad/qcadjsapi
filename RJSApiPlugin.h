#ifndef RJSAPIPLUGIN_H
#define RJSAPIPLUGIN_H

#include <QtGlobal>
#include <QMetaType>
#include <QObject>
#include <QStringList>

#include "RPluginInterface.h"

class RScriptHandler;

/**
 * \ingroup js
 */
class RJSApiPlugin : public QObject, public RPluginInterface
{
    Q_OBJECT
    Q_INTERFACES(RPluginInterface)
#if QT_VERSION >= 0x050000
    Q_PLUGIN_METADATA(IID "org.qcad.js")
#endif

public:
    virtual bool init();
    virtual void uninit(bool) {}
    virtual void postInit(InitStatus) {}
#if QT_VERSION < 0x060000
    virtual void initScriptExtensions(QScriptEngine&) {}
#endif
    virtual void initTranslations() {}
    virtual RPluginInfo getPluginInfo();
    virtual bool checkLicense() { return true; }

    static RScriptHandler* factory();
};

#endif
