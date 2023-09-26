
  // Auto generated
  
  // include header:
  //#include "RGridwrapper.h"
  //#include "header_cpp.h"
  
    #include "rgrid_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RGrid*> RGrid_Wrapper::basecasters_RGrid;
    
    // static functions implementation in singleton wrapper:
    
    void RGrid_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RGrid_Wrapper>("org.qcad", 1, 0, "RGrid_Wrapper");
        qmlRegisterInterface<RGrid_Wrapper>("RGrid_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RGrid* t = new RJSType_RGrid();
          global.setProperty("RJSType_RGrid", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RGrid::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RGrid_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RGrid_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RGrid_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RGrid_BaseJs", mob);
      
      QString fileName = ":generator/js/RGrid.js";
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
    RGrid_Wrapper::RGrid_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RGrid_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RGrid_Wrapper::RGrid_Wrapper(RJSApi& h, RGrid* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RGrid_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RGrid_Wrapper"));
              //setObjectName("RGrid_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RGrid_Wrapper::~RGrid_Wrapper() {
            //RDebug::decCounter(QString("RGrid_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RGrid_Wrapper"));

            //qDebug() << "RGrid_Wrapper::~RGrid_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RGrid";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RGrid_Wrapper::initConnections() {

          //setObjectName("RGrid_Wrapper");

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
    
    // Class: RGrid
    // Function: clearCache
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::clearCache
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
                RGrid* w = getWrapped();
                
                w->clearCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: snapToGrid
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::snapToGrid
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: positionUcs (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGrid* w = getWrapped();
                RVector res = 
                    
                w->snapToGrid(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for snapToGrid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: update
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::update
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
                RGrid* w = getWrapped();
                
                w->update(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: paint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::paint
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
                RGrid* w = getWrapped();
                
                w->paint(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: paintMetaGrid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::paintMetaGrid
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
                RGrid* w = getWrapped();
                
                w->paintMetaGrid(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintMetaGrid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: paintCursor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::paintCursor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGrid* w = getWrapped();
                
                w->paintCursor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: paintRuler
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::paintRuler
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RRuler_ptr(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ruler (RRuler)
  

          // non copyable:
          RRuler*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RRuler_ptr(handler, a1);
        
  // convert js parameter to cpp: devicePixelRatio (qreal)
  
qreal a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 1.0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
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
                RGrid* w = getWrapped();
                
                w->paintRuler(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintRuler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: getInfoText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::getInfoText
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
                RGrid* w = getWrapped();
                QString res = 
                    
                w->getInfoText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInfoText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: isIsometric
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::isIsometric
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
                RGrid* w = getWrapped();
                bool res = 
                    
                w->isIsometric(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isIsometric";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: getProjection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::getProjection
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
                RGrid* w = getWrapped();
                RS::IsoProjectionType res = 
                    
                w->getProjection(
                  
                );
              
            // return type: RS::IsoProjectionType

            return RJSHelper_qcad::cpp2js_RS_IsoProjectionType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getProjection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: getViewportNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::getViewportNumber
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
                RGrid* w = getWrapped();
                int res = 
                    
                w->getViewportNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getViewportNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: getDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::getDocument
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
                RGrid* w = getWrapped();
                RDocument* res = 
                    
                w->getDocument(
                  
                );
              
            // return type: RDocument*

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: setVisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::setVisible
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
                RGrid* w = getWrapped();
                
                w->setVisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGrid
    // Function: isVisible
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGrid_Wrapper::isVisible
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
                RGrid* w = getWrapped();
                bool res = 
                    
                w->isVisible(
                  
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
