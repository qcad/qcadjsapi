
  // Auto generated
  
    #ifndef RRESTRICTORTHOGONAL_H_WRAPPER
    #define RRESTRICTORTHOGONAL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocumentInterface.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RRestrictOrthogonal.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RRestrictOrthogonal
    class QCADJSAPI_EXPORT 
     RRestrictOrthogonal_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RRestrictOrthogonal_Wrapper(const RRestrictOrthogonal_Wrapper&);

    public:
      // initialization of RRestrictOrthogonal:
      static void init(RJSApi& handler);

      
        static RRestrictOrthogonal* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RRestrictOrthogonal:
          for (int i=0; i<basecasters_RRestrictOrthogonal.length(); i++) {
            RJSBasecaster_RRestrictOrthogonal* basecaster = basecasters_RRestrictOrthogonal[i];
            RRestrictOrthogonal* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RRestrictOrthogonal:
          if (t==RJSType_RRestrictOrthogonal::getIdStatic()) {
            return (RRestrictOrthogonal*)vp;
          }

          qWarning() << "RRestrictOrthogonal_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RRestrictOrthogonal* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RRestrictOrthogonal*: wrapper wraps NULL";
          }

          RRestrictOrthogonal* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RRestrictOrthogonal*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RRestrictOrthogonal_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RRestrictOrthogonal_Wrapper(RJSApi& h, RRestrictOrthogonal* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RRestrictOrthogonal_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RRestrictOrthogonal
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RRestrictOrthogonal_Wrapper
                
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
    
    // Class: RRestrictOrthogonal
    // Function: showUiOptions
    // Source: RSnapRestriction
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
            
    // Class: RRestrictOrthogonal
    // Function: hideUiOptions
    // Source: RSnapRestriction
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
            
    // Class: RRestrictOrthogonal
    // Function: getLastSnap
    // Source: RSnapRestriction
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
            
    // Class: RRestrictOrthogonal
    // Function: reset
    // Source: RSnapRestriction
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
            
    // Class: RRestrictOrthogonal
    // Function: restrictSnap
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  restrictSnap
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
          return RJSType_RRestrictOrthogonal::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RRestrictOrthogonal* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RRestrictOrthogonal* getWrapped() const {
          
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
          RRestrictOrthogonal* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RRestrictOrthogonal*> basecasters_RRestrictOrthogonal;

      public:
        static void registerBasecaster_RRestrictOrthogonal(RJSBasecaster_RRestrictOrthogonal* bc) {
          basecasters_RRestrictOrthogonal.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RRestrictOrthogonal_Wrapper*)

    Q_DECLARE_INTERFACE(RRestrictOrthogonal_Wrapper, "org.qcad.RRestrictOrthogonal_Wrapper")

  
  #endif
  
