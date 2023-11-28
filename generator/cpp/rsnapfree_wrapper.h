
  // Auto generated
  
    #ifndef RSNAPFREE_H_WRAPPER
    #define RSNAPFREE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsView.h"
      
        #include "RMouseEvent.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSnapFree.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSnapFree
    class QCADJSAPI_EXPORT 
     RSnapFree_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSnapFree_Wrapper(const RSnapFree_Wrapper&);

    public:
      // initialization of RSnapFree:
      static void init(RJSApi& handler);

      
        static RSnapFree* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RSnapFree:
          for (int i=0; i<basecasters_RSnapFree.length(); i++) {
            RJSBasecaster_RSnapFree* basecaster = basecasters_RSnapFree[i];
            RSnapFree* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RSnapFree:
          if (t==RJSType_RSnapFree::getIdStatic()) {
            return (RSnapFree*)vp;
          }

          qWarning() << "RSnapFree_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RSnapFree* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSnapFree*: wrapper wraps NULL";
          }

          RSnapFree* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSnapFree*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Status {
    Unknown = RSnapFree::Unknown,
Free = RSnapFree::Free,
Grid = RSnapFree::Grid,
Endpoint = RSnapFree::Endpoint,
OnEntity = RSnapFree::OnEntity,
Center = RSnapFree::Center,
Middle = RSnapFree::Middle,
Distance = RSnapFree::Distance,
Intersection = RSnapFree::Intersection,
IntersectionManual = RSnapFree::IntersectionManual,
Reference = RSnapFree::Reference,
Perpendicular = RSnapFree::Perpendicular,
Tangential = RSnapFree::Tangential,
Coordinate = RSnapFree::Coordinate,
CoordinatePolar = RSnapFree::CoordinatePolar,

  };
  Q_ENUM(Status)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSnapFree_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSnapFree_Wrapper(RJSApi& h, RSnapFree* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSnapFree_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RSnapFree
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RSnapFree_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RSnapFree
    // Function: showUiOptions
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      showUiOptionsSuper
                    
              (

                
              )
              
              ;
            
    // Class: RSnapFree
    // Function: hideUiOptions
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      hideUiOptionsSuper
                    
              (

                
              )
              
              ;
            
    // Class: RSnapFree
    // Function: suspendEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  suspendEvent
              (

                
              )
              
              ;
            
    // Class: RSnapFree
    // Function: finishEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  finishEvent
              (

                
              )
              
              ;
            
    // Class: RSnapFree
    // Function: getEntityIds
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEntityIds
              (

                
              )
              
              ;
            
    // Class: RSnapFree
    // Function: getStatus
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getStatus
              (

                
              )
              
                const
              
              ;
            
    // Class: RSnapFree
    // Function: setStatus
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStatus
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSnapFree
    // Function: getLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLastSnap
              (

                
              )
              
                const
              
              ;
            
    // Class: RSnapFree
    // Function: setLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLastSnap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RSnapFree
    // Function: reset
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
              ;
            
    // Class: RSnapFree
    // Function: snap
    // Source: 
    // Static: false
    // Parameters: 3
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
    , 
  const QJSValue& 
  a3
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
          return RJSType_RSnapFree::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSnapFree* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSnapFree* getWrapped() const {
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

        

        private:
        // wrapped object:
        RSnapFree* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSnapFree*> basecasters_RSnapFree;

      public:
        static void registerBasecaster_RSnapFree(RJSBasecaster_RSnapFree* bc) {
          basecasters_RSnapFree.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSnapFree_Wrapper*)

    Q_DECLARE_INTERFACE(RSnapFree_Wrapper, "org.qcad.RSnapFree_Wrapper")

  
  #endif
  
