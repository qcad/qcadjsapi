
  // Auto generated
  
    #ifndef RVIEWFOCUSLISTENERADAPTER_H_WRAPPER
    #define RVIEWFOCUSLISTENERADAPTER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsView.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RViewFocusListenerAdapter.h"
      
      // wrapped object is RViewFocusListenerAdapter_Base class if new object is created: 
      #include "rviewfocuslisteneradapter_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RViewFocusListenerAdapter
    class QCADJSAPI_EXPORT 
     RViewFocusListenerAdapter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RViewFocusListenerAdapter_Wrapper(const RViewFocusListenerAdapter_Wrapper&);

    public:
      // initialization of RViewFocusListenerAdapter:
      static void init(RJSApi& handler);

      
        static RViewFocusListenerAdapter* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RViewFocusListenerAdapter:
          for (int i=0; i<basecasters_RViewFocusListenerAdapter.length(); i++) {
            RJSBasecaster_RViewFocusListenerAdapter* basecaster = basecasters_RViewFocusListenerAdapter[i];
            RViewFocusListenerAdapter* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RViewFocusListenerAdapter:
          if (t==RJSType_RViewFocusListenerAdapter::getIdStatic()) {
            return (RViewFocusListenerAdapter*)vp;
          }

          qWarning() << "RViewFocusListenerAdapter_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RViewFocusListenerAdapter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RViewFocusListenerAdapter*: wrapper wraps NULL";
          }

          RViewFocusListenerAdapter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RViewFocusListenerAdapter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RViewFocusListenerAdapter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RViewFocusListenerAdapter_Wrapper(RJSApi& h, RViewFocusListenerAdapter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RViewFocusListenerAdapter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RViewFocusListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RViewFocusListenerAdapter_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RViewFocusListenerAdapter
    // Function: updateFocus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      updateFocusSuper
                    
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
          return RJSType_RViewFocusListenerAdapter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RViewFocusListenerAdapter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RViewFocusListenerAdapter* getWrapped() const {
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
          RViewFocusListenerAdapter_Base* getWrappedBase() {
            RViewFocusListenerAdapter* w = getWrapped();
            return dynamic_cast<RViewFocusListenerAdapter_Base*>(w);
          }

          RViewFocusListenerAdapter_Base* getWrappedBase() const {
            RViewFocusListenerAdapter* w = getWrapped();
            return dynamic_cast<RViewFocusListenerAdapter_Base*>(w);
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
          //  RViewFocusListenerAdapter_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RViewFocusListenerAdapter* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RViewFocusListenerAdapter*> basecasters_RViewFocusListenerAdapter;

      public:
        static void registerBasecaster_RViewFocusListenerAdapter(RJSBasecaster_RViewFocusListenerAdapter* bc) {
          basecasters_RViewFocusListenerAdapter.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RViewFocusListenerAdapter_Wrapper*)

    Q_DECLARE_INTERFACE(RViewFocusListenerAdapter_Wrapper, "org.qcad.RViewFocusListenerAdapter_Wrapper")

  
  #endif
  
