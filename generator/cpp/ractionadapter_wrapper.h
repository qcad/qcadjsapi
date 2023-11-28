
  // Auto generated
  
    #ifndef RACTIONADAPTER_H_WRAPPER
    #define RACTIONADAPTER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RPropertyEvent.h"
      
        #include "RGraphicsScene.h"
      
        #include "RDocumentInterface.h"
      
        #include "RCommandEvent.h"
      
        #include "RCoordinateEvent.h"
      
        #include "RDocument.h"
      
        #include "REntityPickEvent.h"
      
        #include "RMouseEvent.h"
      
        #include "RWheelEvent.h"
      
        #include "RGuiAction.h"
      
        #include "RStorage.h"
      
        #include "RTabletEvent.h"
      
        #include "ROperation.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RActionAdapter.h"
      
      // wrapped object is RActionAdapter_Base class if new object is created: 
      #include "ractionadapter_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RActionAdapter
    class QCADJSAPI_EXPORT 
     RActionAdapter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RActionAdapter_Wrapper(const RActionAdapter_Wrapper&);

    public:
      // initialization of RActionAdapter:
      static void init(RJSApi& handler);

      
        static RActionAdapter* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RActionAdapter:
          for (int i=0; i<basecasters_RActionAdapter.length(); i++) {
            RJSBasecaster_RActionAdapter* basecaster = basecasters_RActionAdapter[i];
            RActionAdapter* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RActionAdapter:
          if (t==RJSType_RActionAdapter::getIdStatic()) {
            return (RActionAdapter*)vp;
          }

          qWarning() << "RActionAdapter_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RActionAdapter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RActionAdapter*: wrapper wraps NULL";
          }

          RActionAdapter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RActionAdapter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ClickMode {
    PickCoordinate = RActionAdapter::PickCoordinate,
PickCoordinateNoSnap = RActionAdapter::PickCoordinateNoSnap,
PickEntity = RActionAdapter::PickEntity,
PickingDisabled = RActionAdapter::PickingDisabled,

  };
  Q_ENUM(ClickMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RActionAdapter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RActionAdapter_Wrapper(RJSApi& h, RActionAdapter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RActionAdapter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RActionAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RActionAdapter_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RActionAdapter
    // Function: terminate
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  terminate
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: isTerminated
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTerminated
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: setOverride
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOverride
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: isOverride
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      isOverrideSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: setNoState
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNoState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: hasNoState
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasNoState
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: setUniqueGroup
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUniqueGroup
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: getUniqueGroup
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getUniqueGroup
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: setOverrideBase
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOverrideBase
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: getOverrideBase
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getOverrideBase
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: getGuiAction
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getGuiAction
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: setGuiAction
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGuiAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: getGraphicsScenes
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getGraphicsScenes
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: getDocument
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getDocumentSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: getDocumentInterface
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getDocumentInterfaceSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: getStorage
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getStorage
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: setDocumentInterface
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setDocumentInterfaceSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: setClickMode
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setClickMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: getClickMode
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClickMode
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: snap
    // Source: RAction
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  snap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: beginEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      beginEventSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: setGraphicsView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setGraphicsViewSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: finishEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      finishEventSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: enterEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      enterEventSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: suspendEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      suspendEventSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: resumeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      resumeEventSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: escapeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      escapeEventSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: keyPressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      keyPressEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: keyReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      keyReleaseEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: mousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      mousePressEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      mouseMoveEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: mouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      mouseReleaseEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: mouseDoubleClickEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      mouseDoubleClickEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: wheelEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      wheelEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: tabletEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      tabletEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: swipeGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      swipeGestureEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: panGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      panGestureEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: pinchGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      pinchGestureEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: commandEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      commandEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: commandEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      commandEventPreviewSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: coordinateEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      coordinateEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: coordinateEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      coordinateEventPreviewSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: entityPickEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      entityPickEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: entityPickEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      entityPickEventPreviewSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: propertyChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      propertyChangeEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: zoomChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      zoomChangeEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: updatePreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      updatePreviewSuper
                    
              (

                
              )
              
              ;
            
    // Class: RActionAdapter
    // Function: applyOperation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      applyOperationSuper
                    
              (

                
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RActionAdapter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RActionAdapter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RActionAdapter* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        
          // get wrapped base object or nullptr:
          RActionAdapter_Base* getWrappedBase() {
            RActionAdapter* w = getWrapped();
            return dynamic_cast<RActionAdapter_Base*>(w);
          }

          RActionAdapter_Base* getWrappedBase() const {
            RActionAdapter* w = getWrapped();
            return dynamic_cast<RActionAdapter_Base*>(w);
          }
        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        
          //void setRecFlag(bool on) const {
          //  RActionAdapter_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RActionAdapter* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RActionAdapter*> basecasters_RActionAdapter;

      public:
        static void registerBasecaster_RActionAdapter(RJSBasecaster_RActionAdapter* bc) {
          basecasters_RActionAdapter.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RActionAdapter_Wrapper*)

    Q_DECLARE_INTERFACE(RActionAdapter_Wrapper, "org.qcad.RActionAdapter_Wrapper")

  
  #endif
  
