
  // Automatically generated, do not edit
  
          #ifndef RJSHELPER_QCAD_H
          #define RJSHELPER_QCAD_H

          #include "RJSHelper_qcad_headers.h"
        

      #include <QtCore>
      #include <QtGui>
      #include <QtWidgets>
      #include <QtXml>
      #include <QtQuick>
      #include <QtQuickWidgets>
      #include <QtPrintSupport>
      #include <QtCore5Compat>
      #include <QtSvg>
      #include <QtUiTools>


      #include "RJSWrapper.h"

      

      class RJSHelper_qcad {

      public:

        
  // ----------------
  // primitive types:
  // ----------------
  
  // ------------------------------------
  // QSharedPointer types (non-copyable):
  // ------------------------------------
  
  // --------------
  // wrapped types:
  // --------------
  
      static QJSValue cpp2js_RVector(RJSApi& handler, const RVector* v);
      static QJSValue cpp2js_RVector(RJSApi& handler, const RVector& v);
      static RVector js2cpp_RVector(RJSApi& handler, const QJSValue& v);
      static bool is_RVector(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ----------------------
  // wrapped pointer types:
  // ----------------------
  
  // ------------------------------
  // wrapped QObject pointer types:
  // ------------------------------
  
  // ------------
  // QList types:
  // ------------
  
      static QJSValue cpp2js_QList_RVector(RJSApi& handler, const QList<RVector>& v);
      static QList<RVector> js2cpp_QList_RVector(RJSApi& handler, const QJSValue& v);
      static bool is_QList_RVector(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------------
  // QList pointer types:
  // --------------------
  
  // -----------
  // QSet types:
  // -----------
  
  // -----------
  // QMap types:
  // -----------
  
  // ------------
  // QPair types:
  // ------------
  
  // ------------
  // dummy types:
  // ------------
  
  // --------------------
  // dummy pointer types:
  // --------------------
  
      };

      #endif
    