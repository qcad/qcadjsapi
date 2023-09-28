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

#ifndef RSCRIPTHANDLERJS_H
#define RSCRIPTHANDLERJS_H

#include "qcadjsapi_global.h"

#include <QString>
#include <QJSEngine>
#include <QMainWindow>
#include <QList>
#include <QObject>
#include <QDebug>

#include "RScriptHandler.h"
#include "RDocumentInterface.h"
#include "RGuiAction.h"

class RJSWrapperObj;
class RJSTools;
class RJSApi;


/**
 * Script handler implementation for JS scripts, based on QJSEngine..
 *
 * \ingroup js
 */
class QCADJSAPI_EXPORT RScriptHandlerJs: public QObject, public RScriptHandler {
Q_OBJECT

public:
    RScriptHandlerJs();
    virtual ~RScriptHandlerJs();

    static void deleteWrapper(RJSWrapperObj* wrapper);

    virtual void init();

    static RScriptHandler* factory();

    static QList<QString> getSupportedFileExtensionsStatic();
    QList<QString> getSupportedFileExtensions();

    virtual void doScript(const QString& scriptFile,const QStringList& arguments = QStringList());
    virtual QVariant eval(const QString& script, const QString& fileName = QString());
    virtual QVariant evalGlobal(const QString& script, const QString& fileName = QString());
    virtual RFileImporterAdapter* createFileImporter(const QString& className, RDocument& document);

    virtual bool isRunning();
    virtual void abort();
    virtual bool hasUncaughtExceptions();

    virtual void createActionDocumentLevel(const QString& scriptFile,
            RGuiAction* guiAction, RDocumentInterface* documentInterface);
    virtual void createActionApplicationLevel(const QString& scriptFile,
            RGuiAction* guiAction);

    void initGlobalVariables(const QString& scriptFile);

    QJSEngine* getEngine() {
        return engine;
    }

    RJSApi* getRJSApi() {
        return rjsapi;
    }

    void trace() {
        engine->evaluate("console.trace();");
    }

    QJSValue getSelf() {
        return engine->evaluate("self");
    }

    void registerWrapper(RJSWrapperObj& obj);

public slots:
    void unregisterWrapper(RJSWrapperObj& obj);
    void slotDestroyed(QObject* obj);

private:
    RJSApi* rjsapi;
    QJSEngine* engine;
    RJSTools* tools;

    // list of wrappers created for this script handler:
    // deleted when script handler is deleted:
    QSet<RJSWrapperObj*> wrappers;
};

Q_DECLARE_METATYPE(RScriptHandlerJs*)

#endif // RJSSCRIPTHANDLER_H
