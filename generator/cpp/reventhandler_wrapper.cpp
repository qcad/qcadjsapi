
  // Auto generated
  
  // include header:
  //#include "REventHandlerwrapper.h"
  //#include "header_cpp.h"
  
    #include "reventhandler_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: REventHandler
    // Function: isUrl
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REventHandler_WrapperSingleton::isUrl
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: urlString (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                REventHandler::isUrl(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUrl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REventHandler
    // Function: getUrlsFromMimeData
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REventHandler_WrapperSingleton::getUrlsFromMimeData
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMimeData_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mimeData (QMimeData)
  

          // pointer:
          QMimeData*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMimeData_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QUrl> res = 
                
                // call static member function:
                REventHandler::getUrlsFromMimeData(
              a1_cpp
    
            );
          
            // return type: QList<QUrl>

            return RJSHelper::cpp2js_QList_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUrlsFromMimeData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void REventHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<REventHandler_Wrapper>("org.qcad", 1, 0, "REventHandler_Wrapper");
        qmlRegisterInterface<REventHandler_Wrapper>("REventHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_REventHandler* t = new RJSType_REventHandler();
          global.setProperty("RJSType_REventHandler", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_REventHandler::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&REventHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("REventHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&REventHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("REventHandler_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&REventHandler_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("REventHandler_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        REventHandler_WrapperSingleton * s = new REventHandler_WrapperSingleton(handler);
        engine->globalObject().setProperty("REventHandler_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/REventHandler.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    REventHandler_Wrapper::REventHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("REventHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      REventHandler_Wrapper::REventHandler_Wrapper(RJSApi& h, REventHandler* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("REventHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("REventHandler_Wrapper"));
              //setObjectName("REventHandler_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      REventHandler_Wrapper::~REventHandler_Wrapper() {
            //RDebug::decCounter(QString("REventHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("REventHandler_Wrapper"));

            //qDebug() << "REventHandler_Wrapper::~REventHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of REventHandler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void REventHandler_Wrapper::initConnections() {

          //setObjectName("REventHandler_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

  // constructors:
  
    // Class: REventHandler
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
REventHandler_Wrapper::REventHandler_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("REventHandler_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("REventHandler_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: widget (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
          }
        
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new REventHandler(
                a1_cpp
    , a2_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
   && a2.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for REventHandler";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: REventHandler
    // Function: drawInfoLabel
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              REventHandler_Wrapper::drawInfoLabel
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RTextLabel(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: painter (QPainter)
  

          // pointer:
          QPainter*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_ptr(handler, a1);
        
  // convert js parameter to cpp: textLabel (RTextLabel)
  
RTextLabel a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RTextLabel(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REventHandler* w = getWrapped();
                
                w->drawInfoLabel(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawInfoLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REventHandler
    // Function: drawSnapLabel
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              REventHandler_Wrapper::drawSnapLabel
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
  )

   && RJSHelper::is_QString(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: painter (QPainter)
  

          // pointer:
          QPainter*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_ptr(handler, a1);
        
  // convert js parameter to cpp: pos (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: posRestriction (RVector)
  
RVector a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
        
  // convert js parameter to cpp: text (QString)
  
QString a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REventHandler* w = getWrapped();
                
                w->drawSnapLabel(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawSnapLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REventHandler
    // Function: dragEnter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REventHandler_Wrapper::dragEnter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDragEnterEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QDragEnterEvent)
  

          // pointer:
          QDragEnterEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDragEnterEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REventHandler* w = getWrapped();
                
                w->dragEnter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dragEnter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REventHandler
    // Function: updateTextLabel
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              REventHandler_Wrapper::updateTextLabel
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RTextLabel(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: painter (QPainter)
  

          // pointer:
          QPainter*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_ptr(handler, a1);
        
  // convert js parameter to cpp: textLabel (RTextLabel)
  
RTextLabel a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RTextLabel(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REventHandler* w = getWrapped();
                
                w->updateTextLabel(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTextLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REventHandler
    // Function: updateSnapInfo
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              REventHandler_Wrapper::updateSnapInfo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RSnap_ptr(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RSnapRestriction_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: painter (QPainter)
  

          // pointer:
          QPainter*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_ptr(handler, a1);
        
  // convert js parameter to cpp: snap (RSnap)
  

          // pointer:
          RSnap*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RSnap_ptr(handler, a2);
        
  // convert js parameter to cpp: restriction (RSnapRestriction)
  

          // pointer:
          RSnapRestriction*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RSnapRestriction_ptr(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REventHandler* w = getWrapped();
                
                w->updateSnapInfo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSnapInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REventHandler
    // Function: viewportChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REventHandler_Wrapper::viewportChanged
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REventHandler* w = getWrapped();
                
                w->viewportChanged(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for viewportChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REventHandler
    // Function: horizontalScrolled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REventHandler_Wrapper::horizontalScrolled
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REventHandler* w = getWrapped();
                
                w->horizontalScrolled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for horizontalScrolled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REventHandler
    // Function: verticalScrolled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REventHandler_Wrapper::verticalScrolled
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REventHandler* w = getWrapped();
                
                w->verticalScrolled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for verticalScrolled";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  