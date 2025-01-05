
  // Auto generated
  
  // include header:
  //#include "RGraphicsSceneQtwrapper.h"
  //#include "header_cpp.h"
  
    #include "rgraphicssceneqt_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RGraphicsSceneQt*> RGraphicsSceneQt_Wrapper::basecasters_RGraphicsSceneQt;
    
    // static functions implementation in singleton wrapper:
    
    void RGraphicsSceneQt_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RGraphicsSceneQt_Wrapper>("org.qcad", 1, 0, "RGraphicsSceneQt_Wrapper");
        qmlRegisterInterface<RGraphicsSceneQt_Wrapper>("RGraphicsSceneQt_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RGraphicsSceneQt* t = new RJSType_RGraphicsSceneQt();
          global.setProperty("RJSType_RGraphicsSceneQt", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RGraphicsSceneQt::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RGraphicsSceneQt_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RGraphicsSceneQt_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RGraphicsSceneQt_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RGraphicsSceneQt_BaseJs", mob);
      
      QString fileName = ":generator/js/RGraphicsSceneQt.js";
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
    RGraphicsSceneQt_Wrapper::RGraphicsSceneQt_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RGraphicsSceneQt_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RGraphicsSceneQt_Wrapper::RGraphicsSceneQt_Wrapper(RJSApi& h, RGraphicsSceneQt* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RGraphicsSceneQt_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RGraphicsSceneQt_Wrapper"));
              //setObjectName("RGraphicsSceneQt_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RGraphicsSceneQt_Wrapper::~RGraphicsSceneQt_Wrapper() {
            //RDebug::decCounter(QString("RGraphicsSceneQt_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RGraphicsSceneQt_Wrapper"));

            //qDebug() << "RGraphicsSceneQt_Wrapper::~RGraphicsSceneQt_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RGraphicsSceneQt";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RGraphicsSceneQt_Wrapper::initConnections() {

          //setObjectName("RGraphicsSceneQt_Wrapper");

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
  
    // Class: RGraphicsSceneQt
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RGraphicsSceneQt_Wrapper::RGraphicsSceneQt_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RGraphicsSceneQt_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RGraphicsSceneQt_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // non copyable:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new RGraphicsSceneQt(
                  *a1_cpp
    
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
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RGraphicsSceneQt";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RGraphicsSceneQt
    // Function: getErrorMessage
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getErrorMessage
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QString res = 
                    
                w->getErrorMessage(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setLayerSource
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setLayerSource
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setLayerSource(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerSource";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setBlockSource
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setBlockSource
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setBlockSource(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockSource";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getDocument
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RDocument* res =
                    &
                w->getDocument(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setProjectionRenderingHint
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setProjectionRenderingHint
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setProjectionRenderingHint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProjectionRenderingHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getProjectionRenderingHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getProjectionRenderingHint
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
                RGraphicsSceneQt* w = getWrapped();
                RS::ProjectionRenderingHint res = 
                    
                w->getProjectionRenderingHint(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setClipping
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setClipping
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setClipping(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClipping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getClipping
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getClipping
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->getClipping(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setPen
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setPen
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setPen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getPen
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getPen
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QPen res = 
                    
                w->getPen(
                  a1_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QPen res = 
                    
                w->getPen(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setBrush
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setBrush
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getBrush
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getBrush
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QBrush res = 
                    
                w->getBrush(
                  a1_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QBrush res = 
                    
                w->getBrush(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: getColor
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getColor
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                RColor res = 
                    
                w->getColor(
                  a1_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                RColor res = 
                    
                w->getColor(
                  a1_cpp
    
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setEntityAttributes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setEntityAttributes
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setEntityAttributes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntityAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setStyle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setStyle
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setBrushStyle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setBrushStyle
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setBrushStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrushStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setColor
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setLineweight
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setLineweight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setLinetypeId
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setLinetypeId
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setLinetypeId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setLinetypePattern
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setLinetypePattern
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getLinetypePattern
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getLinetypePattern
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
                RGraphicsSceneQt* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getLinetypePattern(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: getBlockRefOrEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getBlockRefOrEntity
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
                RGraphicsSceneQt* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->getBlockRefOrEntity(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: getBlockRefOrEntityId
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getBlockRefOrEntityId
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
                RGraphicsSceneQt* w = getWrapped();
                REntity::Id res = 
                    
                w->getBlockRefOrEntityId(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: getEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getEntity
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
                RGraphicsSceneQt* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->getEntity(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: getCurrentBlockRef
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getCurrentBlockRef
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->getCurrentBlockRef(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: getCurrentViewport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getCurrentViewport
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QSharedPointer<RViewportEntity> res = 
                    
                w->getCurrentViewport(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: isEntitySelected
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::isEntitySelected
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
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->isEntitySelected(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: isPatternContinuous
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::isPatternContinuous
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->isPatternContinuous(
                  a1_cpp
    
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: startExport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->startExport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startExport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: endExport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->endExport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endExport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportDocument
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportDocument
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
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->exportDocument(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: exportDocumentSetting
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportDocumentSetting
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportDocumentSetting(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportDocumentSetting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLayers
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLayers
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportLayers(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLayerStates
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLayerStates
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportLayerStates(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayerStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportBlocks
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportBlocks
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportBlocks(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportViews
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportViews
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportViews(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLinetypes
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportLinetypes(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLayer
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLayer
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportLayer(
                  a1_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportLayer(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLayerState
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLayerState
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportLayerState(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayerState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportBlock
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportBlock(
                  a1_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportView
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportView
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportView(
                  a1_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLinetype
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLinetype
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportLinetype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportEntity
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportEntity
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getEntityLayer
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getEntityLayer
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->getEntityLayer(
                  a1_cpp
    
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: isVisible
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::isVisible
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->isVisible(
                  a1_cpp
    
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: endEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->endEntity(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportShapes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportShapes
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportShapes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportShape
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportShape(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportShapeSegment
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportShapeSegment
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportShapeSegment(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportShapeSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLinetypeShape
    // Source: RExporter
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLinetypeShape
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->exportLinetypeShape(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: exportCircle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportCircle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportCircle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportEllipse
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportEllipse(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEllipse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportSplineSegment
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportSplineSegment
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportSplineSegment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportSplineSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportExplodable
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportExplodable
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportExplodable(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportExplodable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportBoundingBoxPaths
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportBoundingBoxPaths
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportBoundingBoxPaths(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBoundingBoxPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportQuad
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportQuad
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportQuad(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportQuad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportVerticalQuad
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportVerticalQuad
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportVerticalQuad(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportVerticalQuad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportBox
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportBox
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportBox(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: isTextRenderedAsText
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->isTextRenderedAsText(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: pushEntity
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::pushEntity
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->pushEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for pushEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: popEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::popEntity
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->popEntity(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for popEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setDraftMode
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setDraftMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDraftMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: toggleDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::toggleDraftMode
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->toggleDraftMode(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleDraftMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getDraftMode
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->getDraftMode(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setTwoColorSelectedMode
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setTwoColorSelectedMode
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setTwoColorSelectedMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTwoColorSelectedMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getTwoColorSelectedMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getTwoColorSelectedMode
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->getTwoColorSelectedMode(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setScreenBasedLinetypes
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setScreenBasedLinetypes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScreenBasedLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: toggleScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::toggleScreenBasedLinetypes
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->toggleScreenBasedLinetypes(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleScreenBasedLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: isVisualExporter
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::isVisualExporter
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->isVisualExporter(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setVisualExporter
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setVisualExporter
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setVisualExporter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisualExporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getExportInvisible
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getExportInvisible
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->getExportInvisible(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setExportInvisible
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setExportInvisible
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setExportInvisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExportInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getPixelSizeHint
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                double res = 
                    
                w->getPixelSizeHint(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: getCurrentPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getCurrentPixelSizeHint
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                double res = 
                    
                w->getCurrentPixelSizeHint(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setPixelSizeHint
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setPixelSizeHint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelSizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getPixelUnit
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getPixelUnit
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->getPixelUnit(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setPixelUnit
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setPixelUnit
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setPixelUnit(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getPixelWidth
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getPixelWidth
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->getPixelWidth(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: setPixelWidth
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setPixelWidth
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setPixelWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setEnablePatterns
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setEnablePatterns
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setEnablePatterns(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEnablePatterns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getDocumentInterface
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getDocumentInterface
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
                RGraphicsSceneQt* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RDocumentInterface* res =
                    &
                w->getDocumentInterface(
                  
                );
              
            // return type: RDocumentInterface&

            return RJSHelper_qcad::cpp2js_RDocumentInterface(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocumentInterface";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getGraphicsViews
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getGraphicsViews
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QList<RGraphicsView*> res = 
                    
                w->getGraphicsViews(
                  
                );
              
            // return type: QList<RGraphicsView*>

            return RJSHelper_qcad::cpp2js_QList_RGraphicsView_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportDocumentSettings
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportDocumentSettings
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
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->exportDocumentSettings(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: regenerate
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::regenerate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: affectedEntities (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: updateViews (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->regenerate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undone (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->regenerate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for regenerate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: regenerateViews
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::regenerateViews
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
    
  // convert js parameter to cpp: force (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->regenerateViews(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: affectedEntities (QSet<RObject::Id>)
  
QSet<RObject::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->regenerateViews(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for regenerateViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: repaintViews
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::repaintViews
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->repaintViews(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for repaintViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: setCursor
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::setCursor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cursor (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->setCursor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleTerminateEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleTerminateEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTerminateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RTerminateEvent)
  

          // non copyable:
          RTerminateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTerminateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleTerminateEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleTerminateEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleKeyPressEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleKeyPressEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QKeyEvent)
  

          // non copyable:
          QKeyEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleKeyPressEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleKeyPressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleKeyReleaseEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleKeyReleaseEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QKeyEvent)
  

          // non copyable:
          QKeyEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleKeyReleaseEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleKeyReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleMouseMoveEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleMouseMoveEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleMouseMoveEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleMouseMoveEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleMousePressEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleMousePressEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleMousePressEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleMousePressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleMouseReleaseEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleMouseReleaseEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleMouseReleaseEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleMouseReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleMouseDoubleClickEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleMouseDoubleClickEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleMouseDoubleClickEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleMouseDoubleClickEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleWheelEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleWheelEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RWheelEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RWheelEvent)
  

          // non copyable:
          RWheelEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RWheelEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleWheelEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleWheelEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleTabletEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleTabletEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTabletEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RTabletEvent)
  

          // non copyable:
          RTabletEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTabletEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleTabletEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleTabletEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handleSwipeGestureEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handleSwipeGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSwipeGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QSwipeGesture)
  

          // non copyable:
          QSwipeGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSwipeGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handleSwipeGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleSwipeGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handlePanGestureEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handlePanGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPanGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QPanGesture)
  

          // non copyable:
          QPanGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPanGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handlePanGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handlePanGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: handlePinchGestureEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::handlePinchGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPinchGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QPinchGesture)
  

          // non copyable:
          QPinchGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPinchGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->handlePinchGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handlePinchGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: registerView
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::registerView
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // pointer:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        
  // convert js parameter to cpp: regen (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->registerView(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for registerView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: unregisterView
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::unregisterView
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // pointer:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->unregisterView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unregisterView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: beginPreview
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::beginPreview
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->beginPreview(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: endPreview
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::endPreview
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->endPreview(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: isPreviewEmpty
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::isPreviewEmpty
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
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->isPreviewEmpty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPreviewEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: beginNoColorMode
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::beginNoColorMode
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->beginNoColorMode(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginNoColorMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: endNoColorMode
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::endNoColorMode
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->endNoColorMode(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endNoColorMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getNoColorMode
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getNoColorMode
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->getNoColorMode(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNoColorMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getHighlightedReferencePoint
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getHighlightedReferencePoint
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
                RGraphicsSceneQt* w = getWrapped();
                RRefPoint res = 
                    
                w->getHighlightedReferencePoint(
                  
                );
              
            // return type: RRefPoint

            return RJSHelper_qcad::cpp2js_RRefPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHighlightedReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: highlightReferencePoint
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::highlightReferencePoint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RRefPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RRefPoint)
  
RRefPoint a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RRefPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->highlightReferencePoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for highlightReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: selectReferencePoints
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::selectReferencePoints
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
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        
  // convert js parameter to cpp: add (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->selectReferencePoints(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportCurrentEntity
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportCurrentEntity(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportCurrentEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: countReferencePoints
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::countReferencePoints
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                int res = 
                    
                w->countReferencePoints(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for countReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: hasSelectedReferencePoints
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::hasSelectedReferencePoints
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->hasSelectedReferencePoints(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasSelectedReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getGraphicsView
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getGraphicsView
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                RGraphicsViewImage* res = 
                    
                w->getGraphicsView(
                  
                );
              
            // return type: RGraphicsViewImage*

            return RJSHelper_qcad::cpp2js_RGraphicsViewImage(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::clear
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: updateSelectionStatus
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::updateSelectionStatus
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: affectedEntities (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: updateViews (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->updateSelectionStatus(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSelectionStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: clearPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::clearPreview
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->clearPreview(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportEntities
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
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportEntitiesThread
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportEntitiesThread
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper_qcad::is_QList_REntity_Id(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: threadId (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: list (QList<REntity::Id>)
  
QList<REntity::Id> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_REntity_Id(handler, a2);
        
  // convert js parameter to cpp: start (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: end (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportEntitiesThread(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEntitiesThread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportEntityThread
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportEntityThread
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper_qcad::is_REntity_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: threadId (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: id (REntity::Id)
  
REntity::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportEntityThread(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEntityThread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: beginPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::beginPath
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
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->beginPath(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for beginPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: endPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::endPath
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->endPath(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: transformAndApplyPatternPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::transformAndApplyPatternPath
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->transformAndApplyPatternPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for transformAndApplyPatternPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: unexportEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::unexportEntity
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->unexportEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unexportEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportPoint
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
    
  // convert js parameter to cpp: point (RPoint)
  
RPoint a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLine
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLine
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                double res = 
                    
                w->exportLine(
                  a1_cpp
    , a2_cpp
    
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: exportArc
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportArc
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportArc(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportArc";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportThickPolyline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportThickPolyline
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportThickPolyline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportThickPolyline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportPolyline
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportPolyline
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportPolyline(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportPolyline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportPolylineFill
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportPolylineFill
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportPolylineFill(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportPolylineFill";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportSpline
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportSpline
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportSpline(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportSpline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportArcSegment
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportArcSegment
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
    
  // convert js parameter to cpp: arc (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp: allowForZeroLength (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportArcSegment(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportArcSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportLineSegment
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportLineSegment
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
        
  // convert js parameter to cpp: angle (double)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportLineSegment(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLineSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportXLine
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportXLine
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
    
  // convert js parameter to cpp: xLine (RXLine)
  
RXLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RXLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportXLine(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportXLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportRay
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportRay
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportRay(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportRay";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportTriangle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportTriangle
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
    
  // convert js parameter to cpp: triangle (RTriangle)
  
RTriangle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTriangle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportTriangle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportTriangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportRectangle
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportRectangle
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportRectangle(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportRectangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportPainterPaths
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportPainterPaths
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportPainterPaths(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportPainterPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportImage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportImage
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportImage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportText
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportText
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QList<RPainterPath> res = 
                    
                w->exportText(
                  a1_cpp
    , a2_cpp
    
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: exportClipRectangle
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportClipRectangle
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
    
  // convert js parameter to cpp: clipRectangles (RBox)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportClipRectangle(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportClipRectangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportTransform
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportTransform
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportTransform(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: exportEndTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::exportEndTransform
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->exportEndTransform(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEndTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getLineTypePatternScale
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getLineTypePatternScale
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                double res = 
                    
                w->getLineTypePatternScale(
                  a1_cpp
    
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: highlightEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::highlightEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->highlightEntity(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for highlightEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: deleteDrawables
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::deleteDrawables
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->deleteDrawables(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteDrawables";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getDrawablesList
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getDrawablesList
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                QList<RGraphicsSceneDrawable> res = 
                    
                w->getDrawablesList(
                  a1_cpp
    
                );
              
            // return type: QList<RGraphicsSceneDrawable>

            return RJSHelper_qcad::cpp2js_QList_RGraphicsSceneDrawable(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDrawablesList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: hasPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::hasPreview
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->hasPreview(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getPreviewEntityIds
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getPreviewEntityIds
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
                RGraphicsSceneQt* w = getWrapped();
                QList<REntity::Id> res = 
                    
                w->getPreviewEntityIds(
                  
                );
              
            // return type: QList<REntity::Id>

            return RJSHelper_qcad::cpp2js_QList_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPreviewEntityIds";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: addToPreview
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::addToPreview
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper_qcad::is_QList_RGraphicsSceneDrawable(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: drawables (QList<RGraphicsSceneDrawable>)
  
QList<RGraphicsSceneDrawable> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_RGraphicsSceneDrawable(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->addToPreview(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper_qcad::is_RGraphicsSceneDrawable(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: drawable (RGraphicsSceneDrawable)
  
RGraphicsSceneDrawable a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RGraphicsSceneDrawable(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->addToPreview(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addToPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: addTextToPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::addTextToPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (RTextBasedData)
  
RTextBasedData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->addTextToPreview(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addTextToPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: hasClipRectangleFor
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::hasClipRectangleFor
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: preview (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->hasClipRectangleFor(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasClipRectangleFor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getClipRectangle
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getClipRectangle
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: preview (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                RBox res = 
                    
                w->getClipRectangle(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClipRectangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: addDrawable
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::addDrawable
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
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper_qcad::is_RGraphicsSceneDrawable(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: drawable (RGraphicsSceneDrawable)
  
RGraphicsSceneDrawable a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RGraphicsSceneDrawable(handler, a2);
        
  // convert js parameter to cpp: draft (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: preview (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->addDrawable(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addDrawable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: startEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::startEntity
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
    
  // convert js parameter to cpp: topLevelEntity (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                
                w->startEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneQt
    // Function: getScreenBasedLinetypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::getScreenBasedLinetypes
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneQt* w = getWrapped();
                bool res = 
                    
                w->getScreenBasedLinetypes(
                  
                );
              
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
            
    // Class: RGraphicsSceneQt
    // Function: dump
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneQt_Wrapper::dump
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
                RGraphicsSceneQt* w = getWrapped();
                
                w->dump(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dump";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rgraphicssceneqt_wrapper.cpp"
  
