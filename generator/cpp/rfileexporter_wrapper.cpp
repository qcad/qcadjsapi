
  // Auto generated
  
  // include header:
  //#include "RFileExporterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileexporter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileExporter*> RFileExporter_Wrapper::basecasters_RFileExporter;
    
    // static functions implementation in singleton wrapper:
    
    void RFileExporter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileExporter_Wrapper>("org.qcad", 1, 0, "RFileExporter_Wrapper");
        qmlRegisterInterface<RFileExporter_Wrapper>("RFileExporter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileExporter* t = new RJSType_RFileExporter();
          global.setProperty("RJSType_RFileExporter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileExporter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileExporter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileExporter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileExporter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileExporter_BaseJs", mob);
      
      QString fileName = ":generator/js/RFileExporter.js";
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
    RFileExporter_Wrapper::RFileExporter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileExporter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileExporter_Wrapper::RFileExporter_Wrapper(RJSApi& h, RFileExporter* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileExporter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileExporter_Wrapper"));
              //setObjectName("RFileExporter_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileExporter_Wrapper::~RFileExporter_Wrapper() {
            //RDebug::decCounter(QString("RFileExporter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileExporter_Wrapper"));

            //qDebug() << "RFileExporter_Wrapper::~RFileExporter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFileExporter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileExporter_Wrapper::initConnections() {

          //setObjectName("RFileExporter_Wrapper");

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
  

    // non-static functions:
    
    // Class: RFileExporter
    // Function: getErrorMessage
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getErrorMessage
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setLayerSource
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setLayerSource
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
                RFileExporter* w = getWrapped();
                
                w->setLayerSource(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerSource";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: setBlockSource
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setBlockSource
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
                RFileExporter* w = getWrapped();
                
                w->setBlockSource(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockSource";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: setProjectionRenderingHint
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setProjectionRenderingHint
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
                RFileExporter* w = getWrapped();
                
                w->setProjectionRenderingHint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProjectionRenderingHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getProjectionRenderingHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getProjectionRenderingHint
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setClipping
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setClipping
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
                RFileExporter* w = getWrapped();
                
                w->setClipping(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClipping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getClipping
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getClipping
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setPen
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setPen
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
                RFileExporter* w = getWrapped();
                
                w->setPen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getPen
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getPen
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
                RFileExporter* w = getWrapped();
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setBrush
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setBrush
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
                RFileExporter* w = getWrapped();
                
                w->setBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getBrush
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getBrush
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
                RFileExporter* w = getWrapped();
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: getColor
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getColor
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
                RFileExporter* w = getWrapped();
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setEntityAttributes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setEntityAttributes
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
                RFileExporter* w = getWrapped();
                
                w->setEntityAttributes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntityAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: setStyle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setStyle
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
                RFileExporter* w = getWrapped();
                
                w->setStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: setBrushStyle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setBrushStyle
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
                RFileExporter* w = getWrapped();
                
                w->setBrushStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrushStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: setLinetypeId
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setLinetypeId
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
                RFileExporter* w = getWrapped();
                
                w->setLinetypeId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: setLinetypePattern
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setLinetypePattern
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
                RFileExporter* w = getWrapped();
                
                w->setLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getLinetypePattern
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getLinetypePattern
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: getBlockRefOrEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getBlockRefOrEntity
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: getBlockRefOrEntityId
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getBlockRefOrEntityId
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: getEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getEntity
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: getCurrentBlockRef
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getCurrentBlockRef
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: getCurrentViewport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getCurrentViewport
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: isEntitySelected
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::isEntitySelected
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: isPatternContinuous
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::isPatternContinuous
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: exportDocument
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportDocument
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: exportDocumentSettings
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportDocumentSettings
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: exportDocumentSetting
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportDocumentSetting
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
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: exportLayers
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportLayers
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
                RFileExporter* w = getWrapped();
                
                w->exportLayers(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportLayerStates
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportLayerStates
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
                RFileExporter* w = getWrapped();
                
                w->exportLayerStates(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayerStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportBlocks
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportBlocks
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
                RFileExporter* w = getWrapped();
                
                w->exportBlocks(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportViews
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportViews
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
                RFileExporter* w = getWrapped();
                
                w->exportViews(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportLinetypes
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
                RFileExporter* w = getWrapped();
                
                w->exportLinetypes(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportLayer
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportLayer
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
                RFileExporter* w = getWrapped();
                
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
                RFileExporter* w = getWrapped();
                
                w->exportLayer(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportLayerState
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportLayerState
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
                RFileExporter* w = getWrapped();
                
                w->exportLayerState(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLayerState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportView
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportView
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
                RFileExporter* w = getWrapped();
                
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
                RFileExporter* w = getWrapped();
                
                w->exportView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportLinetype
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportLinetype
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
                RFileExporter* w = getWrapped();
                
                w->exportLinetype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportEntity
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportEntity
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
                RFileExporter* w = getWrapped();
                
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
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: getEntityLayer
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getEntityLayer
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: isVisible
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::isVisible
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: startEntity
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::startEntity
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporter* w = getWrapped();
                
                w->startEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: unexportEntity
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::unexportEntity
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
                RFileExporter* w = getWrapped();
                
                w->unexportEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unexportEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportShapes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportShapes
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
                RFileExporter* w = getWrapped();
                
                w->exportShapes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportShapeSegment
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportShapeSegment
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
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: exportLinetypeShape
    // Source: RExporter
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportLinetypeShape
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: exportXLine
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportXLine
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
                RFileExporter* w = getWrapped();
                
                w->exportXLine(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportXLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportRay
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportRay
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
                RFileExporter* w = getWrapped();
                
                w->exportRay(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportRay";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportSplineSegment
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportSplineSegment
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
                RFileExporter* w = getWrapped();
                
                w->exportSplineSegment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportSplineSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportExplodable
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportExplodable
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
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: exportPainterPaths
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportPainterPaths
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporter* w = getWrapped();
                
                w->exportPainterPaths(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: exportBoundingBoxPaths
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportBoundingBoxPaths
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
                RFileExporter* w = getWrapped();
                
                w->exportBoundingBoxPaths(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBoundingBoxPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportClipRectangle
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportClipRectangle
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: exportThickPolyline
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportThickPolyline
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
                RFileExporter* w = getWrapped();
                
                w->exportThickPolyline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportThickPolyline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportQuad
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportQuad
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
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: exportVerticalQuad
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportVerticalQuad
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
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: exportBox
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportBox
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
                RFileExporter* w = getWrapped();
                
                w->exportBox(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: exportRectangle
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::exportRectangle
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
                RFileExporter* w = getWrapped();
                
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
            
    // Class: RFileExporter
    // Function: pushEntity
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::pushEntity
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
                RFileExporter* w = getWrapped();
                
                w->pushEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for pushEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: popEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::popEntity
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
                RFileExporter* w = getWrapped();
                
                w->popEntity(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for popEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: setDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setDraftMode
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
                RFileExporter* w = getWrapped();
                
                w->setDraftMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDraftMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: toggleDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::toggleDraftMode
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
                RFileExporter* w = getWrapped();
                
                w->toggleDraftMode(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleDraftMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getDraftMode
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setTwoColorSelectedMode
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setTwoColorSelectedMode
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
                RFileExporter* w = getWrapped();
                
                w->setTwoColorSelectedMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTwoColorSelectedMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getTwoColorSelectedMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getTwoColorSelectedMode
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setScreenBasedLinetypes
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
                RFileExporter* w = getWrapped();
                
                w->setScreenBasedLinetypes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScreenBasedLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: toggleScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::toggleScreenBasedLinetypes
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
                RFileExporter* w = getWrapped();
                
                w->toggleScreenBasedLinetypes(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleScreenBasedLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getScreenBasedLinetypes
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: isVisualExporter
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::isVisualExporter
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setVisualExporter
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setVisualExporter
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
                RFileExporter* w = getWrapped();
                
                w->setVisualExporter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisualExporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getExportInvisible
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getExportInvisible
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setExportInvisible
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setExportInvisible
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
                RFileExporter* w = getWrapped();
                
                w->setExportInvisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExportInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getPixelSizeHint
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: getCurrentPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getCurrentPixelSizeHint
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setPixelSizeHint
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
                RFileExporter* w = getWrapped();
                
                w->setPixelSizeHint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelSizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getPixelUnit
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getPixelUnit
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setPixelUnit
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setPixelUnit
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
                RFileExporter* w = getWrapped();
                
                w->setPixelUnit(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getPixelWidth
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getPixelWidth
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
                RFileExporter* w = getWrapped();
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
            
    // Class: RFileExporter
    // Function: setPixelWidth
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setPixelWidth
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
                RFileExporter* w = getWrapped();
                
                w->setPixelWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: setEnablePatterns
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::setEnablePatterns
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
                RFileExporter* w = getWrapped();
                
                w->setEnablePatterns(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEnablePatterns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporter
    // Function: getCorrectedFileName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporter_Wrapper::getCorrectedFileName
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporter* w = getWrapped();
                QString res = 
                    
                w->getCorrectedFileName(
                  a1_cpp
    , a2_cpp
    
                );
              
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rfileexporter_wrapper.cpp"
  
