#include <QDebug>
#include "RAutoLoadJs.h"

QStringList RAutoLoadJs::autoLoadFiles;

void RAutoLoadJs::addAutoLoadFile(const QString& file) {
    autoLoadFiles.append(file);
}

QStringList RAutoLoadJs::getAutoLoadFiles() {
    return autoLoadFiles;
}
