import { StyleSheet,Text,View } from 'react-native';
type Props={eyebrow?:string;title:string;message:string};
export function ScreenPlaceholder({eyebrow,title,message}:Props){return <View style={styles.container}>{eyebrow?<Text style={styles.eyebrow}>{eyebrow}</Text>:null}<Text style={styles.title}>{title}</Text><Text style={styles.message}>{message}</Text></View>}
const styles=StyleSheet.create({container:{flex:1,justifyContent:'center',padding:24,backgroundColor:'#08131b'},eyebrow:{marginBottom:8,color:'#8ee86f',fontSize:12,fontWeight:'700',letterSpacing:2},title:{color:'#f4f7f5',fontSize:36,fontWeight:'800'},message:{marginTop:10,color:'#9fb0b9',fontSize:17,lineHeight:24}});
