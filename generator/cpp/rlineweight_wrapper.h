
  // Auto generated
  
    #ifndef RLINEWEIGHT_H_WRAPPER
    #define RLINEWEIGHT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RLineweight.h"
      
      // singleton class wrapper for static functions:
      class RLineweight_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RLineweight_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RLineweight
    // Function: getIcon
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIcon
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
            
    // Class: RLineweight
    // Function: getName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLineweight
    // Function: getClosestMatch
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestMatch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RLineweight_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RLineweight
    class RLineweight_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RLineweight_Wrapper(const RLineweight_Wrapper&);

    public:
      // initialization of RLineweight:
      static void init(RJSApi& handler);

      
        static RLineweight* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RLineweight:
          for (int i=0; i<basecasters_RLineweight.length(); i++) {
            RJSBasecaster_RLineweight* basecaster = basecasters_RLineweight[i];
            RLineweight* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RLineweight:
          if (t==RJSType_RLineweight::getIdStatic()) {
            return (RLineweight*)vp;
          }

          qWarning() << "RLineweight_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RLineweight* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RLineweight*: wrapper wraps NULL";
          }

          RLineweight* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RLineweight*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Lineweight {
    Weight000 = RLineweight::Weight000,
Weight005 = RLineweight::Weight005,
Weight009 = RLineweight::Weight009,
Weight013 = RLineweight::Weight013,
Weight015 = RLineweight::Weight015,
Weight018 = RLineweight::Weight018,
Weight020 = RLineweight::Weight020,
Weight025 = RLineweight::Weight025,
Weight030 = RLineweight::Weight030,
Weight035 = RLineweight::Weight035,
Weight040 = RLineweight::Weight040,
Weight050 = RLineweight::Weight050,
Weight053 = RLineweight::Weight053,
Weight060 = RLineweight::Weight060,
Weight070 = RLineweight::Weight070,
Weight080 = RLineweight::Weight080,
Weight090 = RLineweight::Weight090,
Weight100 = RLineweight::Weight100,
Weight106 = RLineweight::Weight106,
Weight120 = RLineweight::Weight120,
Weight140 = RLineweight::Weight140,
Weight158 = RLineweight::Weight158,
Weight200 = RLineweight::Weight200,
Weight211 = RLineweight::Weight211,
WeightByLayer = RLineweight::WeightByLayer,
WeightByBlock = RLineweight::WeightByBlock,
WeightByLwDefault = RLineweight::WeightByLwDefault,
WeightInvalid = RLineweight::WeightInvalid,

  };
  Q_ENUM(Lineweight)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RLineweight_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RLineweight_Wrapper(RJSApi& h, RLineweight* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RLineweight_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RLineweight
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RLineweight_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    

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
          return RJSType_RLineweight::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RLineweight* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RLineweight* getWrapped() const {
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
        RLineweight* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RLineweight*> basecasters_RLineweight;

      public:
        static void registerBasecaster_RLineweight(RJSBasecaster_RLineweight* bc) {
          basecasters_RLineweight.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RLineweight_Wrapper*)

    Q_DECLARE_INTERFACE(RLineweight_Wrapper, "org.qcad.RLineweight_Wrapper")

  
  #endif
  
