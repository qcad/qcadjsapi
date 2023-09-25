
  // Auto generated
  
    #ifndef RVIEWLISTENERADAPTER_H_WRAPPER
    #define RVIEWLISTENERADAPTER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RViewListenerAdapter.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RViewListenerAdapter
    class RViewListenerAdapter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RViewListenerAdapter_Wrapper(const RViewListenerAdapter_Wrapper&);

    public:
      // initialization of RViewListenerAdapter:
      static void init(RJSApi& handler);

      
        static RViewListenerAdapter* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          if (t==RJSType_RViewListenerAdapter::getIdStatic()) {
            return (RViewListenerAdapter*)vp;
          }

          return nullptr;
          
        }

        static RViewListenerAdapter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RViewListenerAdapter*: wrapper wraps NULL";
          }

          RViewListenerAdapter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RViewListenerAdapter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RViewListenerAdapter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RViewListenerAdapter_Wrapper(RJSApi& h, RViewListenerAdapter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RViewListenerAdapter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RViewListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RViewListenerAdapter_Wrapper
                
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
    
    // Class: RViewListenerAdapter
    // Function: updateViews
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateViews
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RViewListenerAdapter
    // Function: clearViews
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearViews
              (

                
              )
              
              ;
            
    // Class: RViewListenerAdapter
    // Function: viewsUpdated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void viewsUpdated(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void viewsUpdatedEmitter(
                RDocumentInterface* documentInterface
              );
            
    // Class: RViewListenerAdapter
    // Function: viewsCleared
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void viewsCleared(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void viewsClearedEmitter(
                
              );
            
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
          return RJSType_RViewListenerAdapter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RViewListenerAdapter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RViewListenerAdapter* getWrapped() const {
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
        RViewListenerAdapter* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RViewListenerAdapter_Wrapper*)

    Q_DECLARE_INTERFACE(RViewListenerAdapter_Wrapper, "org.qcad.RViewListenerAdapter_Wrapper")

  
  #endif
  