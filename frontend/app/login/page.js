import AuthLayout from '@/components/auth/AuthLayout';
import LoginModal from '@/components/auth/LoginModal';
export const metadata = {
  title: 'Sign In - SkillSphere',
  description: 'Sign in to your SkillSphere account',
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginModal/>
    </AuthLayout>
  );
}
