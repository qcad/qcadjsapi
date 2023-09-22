
  // Automatically generated, do not edit
  
          #include "RJSHelper_qcad.h"
        
          #include "header_qcad_cpp.h"
        
  // ----------------
  // primitive types:
  // ----------------
  
  // ------------------------------------
  // QSharedPointer types (non-copyable):
  // ------------------------------------
  
  // --------------
  // wrapped types:
  // --------------
  
      QJSValue RJSHelper_qcad::cpp2js_RVector(RJSApi& handler, const RVector* v) {
          QJSEngine* engine = handler.getEngine();
          RVector_Wrapper* ret;

          if (v==nullptr) {
              ret = new RVector_Wrapper(handler, nullptr, false);
          }
          else {
              // wrapper takes ownership of RVector object:
              ret = new RVector_Wrapper(handler, new RVector(*v), true);
          }

          // JS: new RVector('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine->globalObject().property("RVector");
          if (cl.isUndefined()) {
              qWarning() << "Class RVector is undefined. Use RVector_Wrapper::init().";
          }
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine->newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine->globalObject().setProperty("wrapper", engine->newQObject(ret));
          //QJSValue r = engine->evaluate("new RVector('__GOT_WRAPPER__', wrapper);");

          if (r.isError()) {
              qWarning()
                      << "Uncaught exception in new RVector(wrapper)"
                      << ":" << r.toString();
          }
          return r;
      }

      QJSValue RJSHelper_qcad::cpp2js_RVector(RJSApi& handler, const RVector& v) {
          QJSEngine* engine = handler.getEngine();
          // wrapper takes ownership of the RVector object:
          RVector_Wrapper* ret = new RVector_Wrapper(handler, new RVector(v), true);

          // JS: new RVector('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine->globalObject().property("RVector");
          if (cl.isUndefined()) {
              qWarning() << "Class RVector is undefined. Use RVector_Wrapper::init().";
          }
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine->newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine->globalObject().setProperty("wrapper", engine->newQObject(ret));
          //QJSValue r = engine->evaluate("new RVector('__GOT_WRAPPER__', wrapper);");

          if (r.isError()) {
              qWarning()
                      << "Uncaught exception in new RVector(wrapper)"
                      << ":" << r.toString();
          }
          return r;
      }

      RVector RJSHelper_qcad::js2cpp_RVector(RJSApi& handler, const QJSValue& v) {
          /*
          RVector_Wrapper* wrapper = getWrapper<RVector_Wrapper>(v);
          if (wrapper==nullptr) {
              qWarning() << "js2cpp_RVector: no wrapper";
              Q_ASSERT(false);
              return RVector();
          }
          //return *(RVector*)wrapper->getWrappedVoid();
          RVector* ret = wrapper->getWrapped();
          if (ret==nullptr) {
              qWarning() << "js2cpp_RVector: wrapped pointer is NULL";
              return RVector();
          }
          return *ret;
          */

          QJSValue jwrapper = getWrapperQJSValue(v);
          if (!jwrapper.isQObject()) {
              //qWarning() << "js2cpp_RVector: not a QObject";
              return RVector();
          }
          QObject* obj = jwrapper.toQObject();
          RJSWrapper* wrapper = dynamic_cast<RJSWrapper*>(obj);
          if (wrapper==nullptr) {
              qWarning() << "js2cpp_RVector_ptr: no wrapper";
              return RVector();
          }
          //RVector* ret = getWrapped_RVector(wrapper);
          RVector* ret = RVector_Wrapper::getWrappedBase(wrapper);
          if (ret==nullptr) {
              return RVector();
          }
          return *ret;
      }

      bool RJSHelper_qcad::is_RVector(RJSApi& handler, const QJSValue& v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          //QJSValue fun = v.property("getType");
          QJSValue fun = v.property("isOfObjectType");
          if (fun.isUndefined() || !fun.isCallable()) {
              //qDebug() << "RJSHelper_qcad::is_RVector: cannot get type of JS object";
              //engine->evaluate("console.trace()");
              //return v.isObject();
              // type is for example string, number, etc.:
              return false;
          }

          return fun.call(QJSValueList() << QJSValue(RJSType_RVector::getIdStatic())).toBool();
      }
    
  // ----------------------
  // wrapped pointer types:
  // ----------------------
  
  // ------------------------------
  // wrapped QObject pointer types:
  // ------------------------------
  
  // ------------
  // QList types:
  // ------------
  
      QJSValue RJSHelper_qcad::cpp2js_QList_RVector(RJSApi& handler, const QList<RVector>& v) {
          QJSEngine* engine = handler.getEngine();
          QJSValue ret = engine->newArray((uint)v.length());
          for (int i=0; i<v.length(); i++) {
              QJSValue jv = RJSHelper_qcad::cpp2js_RVector(handler, v.at(i));
              // prevent undefined values from C++ (e.g. QObjects that are not included in result):
              if (!jv.isUndefined()) {
                  ret.setProperty((quint32)i, jv);
              }
          }
          return ret;
      }

      QList<RVector>RJSHelper_qcad::js2cpp_QList_RVector(RJSApi& handler, const QJSValue& v) {
          //return engine->fromScriptValue<QList<RVector>>(v);
          QList<RVector> ret;

          if (!v.isArray()) {
              qWarning() << "js2cpp_QList_RVector: value is not an array";
              return ret;
          }

          const int length = v.property("length").toInt();
          for (int i=0; i<length; ++i) {
              ret.append(js2cpp_RVector(handler, v.property(i)));
          }

          return ret;
      }

      bool RJSHelper_qcad::is_QList_RVector(RJSApi& handler, const QJSValue& v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isArray();
      }
    
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
  