import { StatusBar } from 'expo-status-bar';
import { 
  Text, 
  View, 
  Image, 
  Linking, 
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// Importando ícones (já vem com o Expo)
import { AntDesign, FontAwesome } from '@expo/vector-icons';

// Importando nossos estilos do arquivo styles.ts
import styles from './styles';

// --- Componente reutilizável para os Cards de Informação ---
// Note que ele já usa o 'styles' que acabamos de importar
const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title.toUpperCase()}</Text>
    {children}
  </View>
);

export default function App() {
  
  // Função para lidar com o clique no botão (WhatsApp)
  const handleContactPress = () => {
    const whatsappNumber = '5581991163657'; // Seu número
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    
    // Tenta abrir o link
    Linking.canOpenURL(whatsappUrl).then(supported => {
      if (supported) {
        return Linking.openURL(whatsappUrl);
      } else {
        Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.');
      }
    });
  };

  // Função genérica para outros links (Email, LinkedIn)
  const handleLinkPress = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        Alert.alert('Erro', `Não foi possível abrir este link.`);
      }
    });
  };

  return (
    // Adicionado SafeAreaView para não sobrepor a barra de status
    <SafeAreaView style={styles.safeArea}>
      {/* Adicionado ScrollView para a tela rolar */}
      <ScrollView>
        <View style={styles.container}>
          {/* 1. Sua Foto */}
          <Image 
            source={require('./assets/perfil.jpg')} // Seu asset
            style={styles.foto} 
          />
          
          {/* 2. O que você é (Seus textos) */}
          <Text style={styles.nome}>Bianca Guimarães</Text>
          <Text style={styles.titulo}>Desenvolvedora em formação</Text>
          
         {/* 3. Botão para falar com você (Botão customizado) */}
          <TouchableOpacity 
            style={styles.botaoContainer} // O estilo vai direto aqui!
            onPress={handleContactPress} 
            activeOpacity={0.7}
          >
            {/* Ícone primeiro */}
            <FontAwesome name="whatsapp" size={20} color="#FFFFFF" />
            {/* Texto depois (para o marginLeft funcionar) */}
            <Text style={styles.botaoPrincipalTexto}>Fale Comigo</Text>
          </TouchableOpacity>
        </View>

          {/* Links */}
          {/*Linkedin*/}
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => handleLinkPress('https://linkedin.com/in/bianca-guimarãessacabral')}>
              <AntDesign name="linkedin" size={32} color="#0e76a8" />
            </TouchableOpacity>
            {/* GITHUB*/}
            <TouchableOpacity onPress={() => handleLinkPress('https://github.com/BiancagscCabral')}>
              <AntDesign name="github" size={32} color="#333" />
            </TouchableOpacity>
            {/* EMAIL */}
            <TouchableOpacity onPress={() => handleLinkPress('mailto:biancagsccabral@gmail.com')}>
              <FontAwesome name="envelope" size={32} color="#c71610" />
            </TouchableOpacity>
          </View>

          {/* --- Seções do currículo PDF --- */}

          <InfoCard title="Sobre Mim">
            <Text style={styles.cardText}>
              Estudante do 3º período de Análise e Desenvolvimento de Sistemas, em busca da minha primeira oportunidade no mercado de tecnologia. 
            </Text>
            <Text style={styles.cardText}>
              Possuo habilidades de gestão de projetos e liderança, desenvolvidas na minha experiência anterior como empreendedora.
            </Text>
          </InfoCard>

          <InfoCard title="Experiência Profissional">
            <Text style={styles.cardSubtitle}>Empreendedora - Studio de Piercing (2020-2025)</Text>
            <Text style={styles.cardText}>
              Responsável pela gestão completa do negócio, incluindo planejamento financeiro, atendimento ao público, marketing e organização de todos os procedimentos operacionais.
            </Text>
          </InfoCard>

          <InfoCard title="Habilidades Técnicas">
            <Text style={styles.cardText}>• Linguagens: JavaScript e Python</Text>
            <Text style={styles.cardText}>• Frameworks: React JS, React Native e Node.js</Text>
            <Text style={styles.cardText}>• Banco de Dados: MySQL</Text>
            <Text style={styles.cardText}>• Web: HTML e CSS</Text>
            <Text style={styles.cardText}>• Ferramentas: Figma, Miro, VS Code</Text>
            <Text style={styles.cardText}>• Metodologias: Scrum, Kanban</Text>
          </InfoCard>

          <InfoCard title="Projetos">
            <Text style={styles.cardSubtitle}>PatrocinaAI (Projeto Integrador)</Text>
            <Text style={styles.cardText}>
              Aplicativo mobile desenvolvido para conectar para-atletas e empresários, facilitando patrocínios. 
            </Text>
            <Text style={styles.cardSubtitle}>Projeto Arcomix (Residência)</Text>
            <Text style={styles.cardText}>
              Website de gerenciamento para a rede Arcomix (agendamento, controle de funcionários e relatórios).
            </Text>
            <Text style={styles.cardSubtitle}>SIGO</Text>
            <Text style={styles.cardText}>
              Website de um Sistema de Gestão de Ocorrências para o Corpo de Bombeiros Militar de Pernambuco (CBMPE), focado em otimizar o registro, gerenciamento e análise de ocorrências.
            </Text>
          </InfoCard>

          <InfoCard title="Educação">
            <Text style={styles.cardSubtitle}>Análise e Desenvolvimento de Sistemas</Text>
            <Text style={styles.cardText}>Faculdade Senac de Pernambuco (FACSENAC)</Text>
            <Text style={styles.cardText}>Conclusão prevista: 2026</Text>
          </InfoCard>
          
          <InfoCard title="Cursos">
            <Text style={styles.cardText}>• Full Stack - Rocketseat</Text>
            <Text style={styles.cardText}>• ReactJS - Rocketseat</Text>
            <Text style={styles.cardText}>• Node.js - Rocketseat</Text>
            <Text style={styles.cardText}>• MySQL - Curso em Vídeo</Text>
          </InfoCard>

          <InfoCard title="Idiomas">
            <Text style={styles.cardText}>• Português: Nativo</Text>
            <Text style={styles.cardText}>• Inglês: Intermediário</Text>
          </InfoCard>

          <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
