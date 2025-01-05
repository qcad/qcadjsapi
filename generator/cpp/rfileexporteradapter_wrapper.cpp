
  // Auto generated
  
  // include header:
  //#include "RFileExporterAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileexporteradapter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileExporterAdapter*> RFileExporterAdapter_Wrapper::basecasters_RFileExporterAdapter;
    
    // static functions implementation in singleton wrapper:
    
    void RFileExporterAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileExporterAdapter_Wrapper>("org.qcad", 1, 0, "RFileExporterAdapter_Wrapper");
        qmlRegisterInterface<RFileExporterAdapter_Wrapper>("RFileExporterAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileExporterAdapter* t = new RJSType_RFileExporterAdapter();
          global.setProperty("RJSType_RFileExporterAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileExporterAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileExporterAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileExporterAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileExporterAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileExporterAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RFileExporterAdapter.js";
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
    RFileExporterAdapter_Wrapper::RFileExporterAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileExporterAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileExporterAdapter_Wrapper::RFileExporterAdapter_Wrapper(RJSApi& h, RFileExporterAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileExporterAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileExporterAdapter_Wrapper"));
              //setObjectName("RFileExporterAdapter_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileExporterAdapter_Wrapper::~RFileExporterAdapter_Wrapper() {
            //RDebug::decCounter(QString("RFileExporterAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileExporterAdapter_Wrapper"));

            //qDebug() << "RFileExporterAdapter_Wrapper::~RFileExporterAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFileExporterAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileExporterAdapter_Wrapper::initConnections() {

          //setObjectName("RFileExporterAdapter_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
    // Class: RFileExporterAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
RFileExporterAdapter_Wrapper::RFileExporterAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFileExporterAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFileExporterAdapter_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RMessageHandler_ptr(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RProgressHandler_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: messageHandler (RMessageHandler)
  

          // pointer:
          RMessageHandler*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RMessageHandler_ptr(handler, a2);
          }
        
  // convert js parameter to cpp: progressHandler (RProgressHandler)
  

          // pointer:
          RProgressHandler*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = NULL;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RProgressHandler_ptr(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
                wrapped = new RFileExporterAdapter_Base(
                  handler
                  
                    ,
                  *a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
                wrappedCreated = true;

                // set handler for wrapped base object:
                //((RFileExporterAdapter_Base*)wrapped)->setHandler(handler);

                // store self to call into JS:
                ((RFileExporterAdapter_Base*)wrapped)->self = handler.getSelf();
              

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
                wrapped = new RFileExporterAdapter_Base(
                  handler
                  
                );
                wrappedCreated = true;

                // set handler for wrapped base object:
                //((RFileExporterAdapter_Base*)wrapped)->setHandler(handler);

                // store self to call into JS:
                ((RFileExporterAdapter_Base*)wrapped)->self = handler.getSelf();
              

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
   && a3.isUndefined()
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RFileExporterAdapter";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RFileExporterAdapter
    // Function: getErrorMessage
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getErrorMessage
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QString res = 
                    
                w->getErrorMessage(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getErrorMessage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setLayerSource
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setLayerSource
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ls (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setLayerSource(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerSource";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setBlockSource
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setBlockSource
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bs (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setBlockSource(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockSource";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getDocument
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getDocumentSuper
                    
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::getDocument: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                      // return type is reference:
                      // use pointer instead 2:
                      RDocument* res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =&
                      wb->getDocumentSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =&
                      wb->getDocument(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: RDocument&

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setProjectionRenderingHint
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setProjectionRenderingHint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_ProjectionRenderingHint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RS::ProjectionRenderingHint)
  
RS::ProjectionRenderingHint a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_ProjectionRenderingHint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setProjectionRenderingHint(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProjectionRenderingHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getProjectionRenderingHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getProjectionRenderingHint
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                RS::ProjectionRenderingHint res = 
                    
                w->getProjectionRenderingHint(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RS::ProjectionRenderingHint

            return RJSHelper_qcad::cpp2js_RS_ProjectionRenderingHint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getProjectionRenderingHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setClipping
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setClipping
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setClipping(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClipping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getClipping
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getClipping
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->getClipping(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClipping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setPen
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setPen
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPen(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pen (QPen)
  
QPen a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPen(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setPen(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getPen
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getPen
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (RPainterPath)
  
RPainterPath a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QPen res = 
                    
                w->getPen(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPen

            return RJSHelper::cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QPen res = 
                    
                w->getPen(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QPen

            return RJSHelper::cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setBrush
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setBrush(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getBrush
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (RPainterPath)
  
RPainterPath a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QBrush res = 
                    
                w->getBrush(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QBrush

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QBrush res = 
                    
                w->getBrush(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QBrush

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getColor
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: unresolvedColor (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                RColor res = 
                    
                w->getColor(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resolve (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                RColor res = 
                    
                w->getColor(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setEntityAttributes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setEntityAttributes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: forceSelected (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setEntityAttributes(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntityAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setStyle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_PenStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: penStyle (Qt::PenStyle)
  
Qt::PenStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_PenStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setStyle(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setBrushStyle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setBrushStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_BrushStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brushStyle (Qt::BrushStyle)
  
Qt::BrushStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setBrushStyle(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrushStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setColor
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setColorSuper
                    
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: g (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: b (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0f;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::setColor: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->setColorSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->setColor(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::setColor: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->setColorSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->setColor(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setLineweight
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setLineweightSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLineweight_Lineweight(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: weight (RLineweight::Lineweight)
  
RLineweight::Lineweight a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::setLineweight: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->setLineweightSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->setLineweight(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setLinetypeId
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setLinetypeId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ltId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setLinetypeId(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setLinetypePattern
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setLinetypePattern
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetypePattern(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ltPattern (RLinetypePattern)
  
RLinetypePattern a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetypePattern(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setLinetypePattern(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getLinetypePattern
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getLinetypePattern
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getLinetypePattern(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RLinetypePattern

            return RJSHelper_qcad::cpp2js_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getBlockRefOrEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getBlockRefOrEntity
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->getBlockRefOrEntity(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockRefOrEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getBlockRefOrEntityId
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getBlockRefOrEntityId
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                REntity::Id res = 
                    
                w->getBlockRefOrEntityId(
                  
                );
              
                //setRecFlag(false);
              
            // return type: REntity::Id

            return RJSHelper_qcad::cpp2js_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockRefOrEntityId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getEntity
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->getEntity(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getCurrentBlockRef
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getCurrentBlockRef
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->getCurrentBlockRef(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentBlockRef";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getCurrentViewport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getCurrentViewport
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QSharedPointer<RViewportEntity> res = 
                    
                w->getCurrentViewport(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSharedPointer<RViewportEntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RViewportEntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: isEntitySelected
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::isEntitySelected
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->isEntitySelected(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEntitySelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: isPatternContinuous
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::isPatternContinuous
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetypePattern(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RLinetypePattern)
  
RLinetypePattern a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetypePattern(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->isPatternContinuous(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPatternContinuous";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: startExport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startExportSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::startExport: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->startExportSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->startExport(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startExport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: endExport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endExportSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::endExport: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->endExportSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->endExport(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endExport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportDocument
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportDocument
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->exportDocument(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exportDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportDocumentSettings
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportDocumentSettings
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->exportDocumentSettings(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exportDocumentSettings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportDocumentSetting
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportDocumentSetting
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: dictionaryName (QString)
  
QString a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = "QCAD_OBJECTS";
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportDocumentSetting(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportDocumentSetting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLayers
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportLayers
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportLayers(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLayerStates
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportLayerStates
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportLayerStates(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayerStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportBlocks
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportBlocks
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportBlocks(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportViews
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportViews
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportViews(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportLinetypes
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportLinetypes(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLayer
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportLayer
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RLayer(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSharedPointer<RLayer>)
  
QSharedPointer<RLayer> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RLayer(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportLayer(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportLayer(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLayerState
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportLayerState
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RLayerState(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSharedPointer<RLayerState>)
  
QSharedPointer<RLayerState> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RLayerState(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportLayerState(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayerState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportBlock
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportBlockSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RBlock(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSharedPointer<RBlock>)
  
QSharedPointer<RBlock> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RBlock(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportBlock: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportBlockSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportBlock(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportBlock: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportBlockSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportBlock(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportView
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportView
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RView(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSharedPointer<RView>)
  
QSharedPointer<RView> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RView(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportView(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RView_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewId (RView::Id)
  
RView::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RView_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportView(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLinetype
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportLinetype
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RLinetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSharedPointer<RLinetype>)
  
QSharedPointer<RLinetype> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RLinetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportLinetype(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportEntities
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportEntitiesSuper
                    
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
        RJSHelper::is_bool(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: allBlocks (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        
  // convert js parameter to cpp: undone (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: invisible (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportEntities: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportEntitiesSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportEntities(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportEntities(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportEntity
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportEntity
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
        RJSHelper_qcad::is_QSharedPointer_REntity(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (QSharedPointer<REntity>)
  
QSharedPointer<REntity> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_REntity(handler, a1);
        
  // convert js parameter to cpp: preview (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: forceSelected (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: forceSelected (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getEntityLayer
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getEntityLayer
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_REntity(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (QSharedPointer<REntity>)
  
QSharedPointer<REntity> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_REntity(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->getEntityLayer(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntityLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: isVisible
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::isVisible
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_REntity(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (QSharedPointer<REntity>)
  
QSharedPointer<REntity> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_REntity(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->isVisible(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: startEntity
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::startEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->startEntity(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: endEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endEntitySuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::endEntity: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->endEntitySup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->endEntity(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportCurrentEntity
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportCurrentEntitySuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: preview (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        
  // convert js parameter to cpp: forceSelected (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportCurrentEntity: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportCurrentEntitySup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportCurrentEntity(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportCurrentEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: unexportEntity
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::unexportEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->unexportEntity(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unexportEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportShapes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportShapes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shapes (QList<QSharedPointer<RShape>>)
  
QList<QSharedPointer<RShape>> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportShapes(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportShape
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportShapeSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (QSharedPointer<RShape>)
  
QSharedPointer<RShape> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportShape: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportShapeSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportShape(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportShapeSegment
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportShapeSegment
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RShape(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (QSharedPointer<RShape>)
  
QSharedPointer<RShape> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RShape(handler, a1);
        
  // convert js parameter to cpp: angle (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportShapeSegment(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportShapeSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLine
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportLineSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: offset (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportLine: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                double res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->exportLineSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->exportLine(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exportLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLinetypeShape
    // Source: RExporter
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportLinetypeShape
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RPainterPath(handler, a1
  )

   && RJSHelper_qcad::is_RLine(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper_qcad::is_RVector(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pps (QList<RPainterPath>)
  
QList<RPainterPath> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RPainterPath(handler, a1);
        
  // convert js parameter to cpp: line (RLine)
  
RLine a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a2);
        
  // convert js parameter to cpp: total (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: length (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: angle (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: cursor (RVector)
  
RVector a6_cpp;

      a6_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->exportLinetypeShape(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exportLinetypeShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportRay
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportRay
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RRay(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ray (RRay)
  
RRay a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RRay(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportRay(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportRay";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportCircle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportCircleSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCircle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: circle (RCircle)
  
RCircle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCircle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportCircle: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportCircleSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportCircle(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportCircle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportArc
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportArcSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RArc(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: arc (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp: offset (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportArc: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportArcSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportArc(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportArc";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportEllipse
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportEllipseSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REllipse(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ellipse (REllipse)
  
REllipse a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a1);
        
  // convert js parameter to cpp: offset (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportEllipse: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportEllipseSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportEllipse(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEllipse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportPolyline
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportPolylineSuper
                    
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
        RJSHelper_qcad::is_RPolyline(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: polyline (RPolyline)
  
RPolyline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPolyline(handler, a1);
        
  // convert js parameter to cpp: polylineGen (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: offset (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RNANDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportPolyline: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportPolylineSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportPolyline(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportPolyline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportSpline
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportSplineSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSpline(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spline (RSpline)
  
RSpline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a1);
        
  // convert js parameter to cpp: offset (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportSpline: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportSplineSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportSpline(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportSpline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportSplineSegment
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportSplineSegment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSpline(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spline (RSpline)
  
RSpline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportSplineSegment(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportSplineSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportExplodable
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportExplodable
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExplodable_ptr(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: explodable (RExplodable)
  

          // non copyable:
          RExplodable*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExplodable_ptr(handler, a1);
        
  // convert js parameter to cpp: offset (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportExplodable(
                  *a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportExplodable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportPainterPaths
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportPainterPaths
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
        RJSHelper_qcad::is_QList_RPainterPath(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: paths (QList<RPainterPath>)
  
QList<RPainterPath> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RPainterPath(handler, a1);
        
  // convert js parameter to cpp: angle (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: pos (RVector)
  
RVector a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportPainterPaths(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RPainterPath(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: paths (QList<RPainterPath>)
  
QList<RPainterPath> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RPainterPath(handler, a1);
        
  // convert js parameter to cpp: z (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0.0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportPainterPaths: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportPainterPathsSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportPainterPaths(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportPainterPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportBoundingBoxPaths
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportBoundingBoxPaths
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: paths (QList<RPainterPath>)
  
QList<RPainterPath> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportBoundingBoxPaths(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBoundingBoxPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportImage
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportImageSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RImageData(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: image (RImageData)
  
RImageData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RImageData(handler, a1);
        
  // convert js parameter to cpp: forceSelected (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportImage: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportImageSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportImage(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportText
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportTextSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (RTextBasedData)
  
RTextBasedData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData(handler, a1);
        
  // convert js parameter to cpp: forceSelected (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportText: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                QList<RPainterPath> res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->exportTextSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->exportText(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: QList<RPainterPath>

            return RJSHelper_qcad::cpp2js_QList_RPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exportText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportClipRectangle
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportClipRectangle
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: clipRectangle (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        
  // convert js parameter to cpp: forceSelected (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportClipRectangle(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportClipRectangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportTransform
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportTransformSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (RTransform)
  
RTransform a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransform(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportTransform: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportTransformSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportTransform(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportEndTransform
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportEndTransformSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportEndTransform: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportEndTransformSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportEndTransform(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEndTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportThickPolyline
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportThickPolyline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPolyline(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: polyline (RPolyline)
  
RPolyline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPolyline(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportThickPolyline(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportThickPolyline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportQuad
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportQuad
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
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p1 (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: p2 (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: p3 (RVector)
  
RVector a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
        
  // convert js parameter to cpp: p4 (RVector)
  
RVector a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportQuad(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportQuad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportVerticalQuad
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportVerticalQuad
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
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p1 (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: p2 (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: height (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportVerticalQuad(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportVerticalQuad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportBox
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportBox
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportBox(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportRectangle
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::exportRectangle
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p1 (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: p2 (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->exportRectangle(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportRectangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: isTextRenderedAsText
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      isTextRenderedAsTextSuper
                    
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::isTextRenderedAsText: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->isTextRenderedAsTextSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->isTextRenderedAsText(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTextRenderedAsText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: pushEntity
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::pushEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_REntity(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QSharedPointer<REntity>)
  
QSharedPointer<REntity> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_REntity(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->pushEntity(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for pushEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: popEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::popEntity
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->popEntity(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for popEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setDraftMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setDraftMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDraftMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: toggleDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::toggleDraftMode
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->toggleDraftMode(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleDraftMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getDraftMode
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->getDraftMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDraftMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setTwoColorSelectedMode
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setTwoColorSelectedMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setTwoColorSelectedMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTwoColorSelectedMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getTwoColorSelectedMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getTwoColorSelectedMode
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->getTwoColorSelectedMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTwoColorSelectedMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setScreenBasedLinetypes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setScreenBasedLinetypes(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScreenBasedLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: toggleScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::toggleScreenBasedLinetypes
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->toggleScreenBasedLinetypes(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleScreenBasedLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getScreenBasedLinetypes
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->getScreenBasedLinetypes(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getScreenBasedLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: isVisualExporter
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::isVisualExporter
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->isVisualExporter(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isVisualExporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setVisualExporter
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setVisualExporter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setVisualExporter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisualExporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getExportInvisible
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getExportInvisible
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->getExportInvisible(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getExportInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setExportInvisible
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setExportInvisible
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setExportInvisible(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExportInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getPixelSizeHint
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                double res = 
                    
                w->getPixelSizeHint(
                  
                );
              
                //setRecFlag(false);
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPixelSizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getCurrentPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getCurrentPixelSizeHint
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                double res = 
                    
                w->getCurrentPixelSizeHint(
                  
                );
              
                //setRecFlag(false);
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentPixelSizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setPixelSizeHint
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
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setPixelSizeHint(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelSizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getPixelUnit
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getPixelUnit
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->getPixelUnit(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPixelUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setPixelUnit
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setPixelUnit
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setPixelUnit(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getPixelWidth
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::getPixelWidth
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                bool res = 
                    
                w->getPixelWidth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPixelWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setPixelWidth
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setPixelWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setPixelWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: setEnablePatterns
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper::setEnablePatterns
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterAdapter* w = getWrapped();
                
                w->setEnablePatterns(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEnablePatterns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getCorrectedFileName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getCorrectedFileNameSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::getCorrectedFileName: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                QString res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->getCorrectedFileNameSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->getCorrectedFileName(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCorrectedFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportFile
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportFileSuper
                    
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: setFileName (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportFile: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->exportFileSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->exportFile(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exportFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportPointSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RPoint)
  
RPoint a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportPoint: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportPointSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportPoint(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportArcSegment
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportArcSegmentSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RArc(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp:  (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportArcSegment: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportArcSegmentSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportArcSegment(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportArcSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportLineSegment
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportLineSegmentSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp:  (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportLineSegment: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportLineSegmentSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportLineSegment(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLineSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportTriangle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportTriangleSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTriangle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RTriangle)
  
RTriangle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTriangle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportTriangle: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportTriangleSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportTriangle(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportTriangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: exportXLine
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportXLineSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RXLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RXLine)
  
RXLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RXLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::exportXLine: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->exportXLineSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->exportXLine(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportXLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterAdapter
    // Function: getLineTypePatternScale
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getLineTypePatternScaleSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetypePattern(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RLinetypePattern)
  
RLinetypePattern a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetypePattern(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileExporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileExporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileExporterAdapter::getLineTypePatternScale: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                double res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->getLineTypePatternScaleSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->getLineTypePatternScale(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineTypePatternScale";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rfileexporteradapter_wrapper.cpp"
  
