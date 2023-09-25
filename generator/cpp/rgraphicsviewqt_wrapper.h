
  // Auto generated
  
    #ifndef RGRAPHICSVIEWQT_H_WRAPPER
    #define RGRAPHICSVIEWQT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RAction.h"
      
        #include "RDocument.h"
      
        #include "RDocumentInterface.h"
      
        #include "RFocusFrame.h"
      
        #include "RGraphicsSceneQt.h"
      
        #include "RLine.h"
      
        #include "RSnap.h"
      
        #include "RSnapRestriction.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RGraphicsViewQt.h"
      
      // wrapped object is RGraphicsViewQt_Base class if new object is created: 
      #include "rgraphicsviewqt_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RGraphicsViewQt
    class RGraphicsViewQt_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RGraphicsViewQt_Wrapper(const RGraphicsViewQt_Wrapper&);

    public:
      // initialization of RGraphicsViewQt:
      static void init(RJSApi& handler);

      
        static RGraphicsViewQt* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          if (t==RJSType_RGraphicsViewQt::getIdStatic()) {
            return (RGraphicsViewQt*)vp;
          }

          return nullptr;
          
        }

        static RGraphicsViewQt* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RGraphicsViewQt*: wrapper wraps NULL";
          }

          RGraphicsViewQt* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RGraphicsViewQt*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RGraphicsViewQt_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RGraphicsViewQt_Wrapper(RJSApi& h, RGraphicsViewQt* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RGraphicsViewQt_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RGraphicsViewQt
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RGraphicsViewQt_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RGraphicsViewQt
    // Function: setImageView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setImageView
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: getImageView
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getImageView
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: disableGestures
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  disableGestures
              (

                
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: removeFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeFocus
              (

                
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: getWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: getHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: getRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getRect
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: getSignalsBlocked
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getSignalsBlocked
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: setSignalsBlocked
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSignalsBlocked
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: getCursor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCursor
              (

                
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: setCursor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: setFocusFrameWidget
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocusFrameWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: simulateMouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  simulateMouseMoveEvent
              (

                
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: drop
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void drop(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void dropEmitter(
                QDropEvent* event
              );
            
    // Class: RGraphicsViewQt
    // Function: dragEnter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void dragEnter(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void dragEnterEmitter(
                QDragEnterEvent* event
              );
            
    // Class: RGraphicsViewQt
    // Function: sizeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mouseMoveEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: paintEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      paintEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsViewQt
    // Function: resizeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      resizeEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
          return RJSType_RGraphicsViewQt::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RGraphicsViewQt* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RGraphicsViewQt* getWrapped() const {
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
          RGraphicsViewQt_Base* getWrappedBase() {
            RGraphicsViewQt* w = getWrapped();
            return dynamic_cast<RGraphicsViewQt_Base*>(w);
          }

          RGraphicsViewQt_Base* getWrappedBase() const {
            RGraphicsViewQt* w = getWrapped();
            return dynamic_cast<RGraphicsViewQt_Base*>(w);
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
          //  RGraphicsViewQt_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RGraphicsViewQt* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RGraphicsViewQt_Wrapper*)

    Q_DECLARE_INTERFACE(RGraphicsViewQt_Wrapper, "org.qcad.RGraphicsViewQt_Wrapper")

  
  #endif
  