'use client';

import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  AlertCircle, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Crown, 
  UserPlus 
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function AuthButton() {
  const { user, isLoading, isError, signIn, signOut } = useAuth();
  
  // This would normally come from your subscription service
  // For demo purposes, we'll assume the user is not premium
  const isPremium = false;

  if (isLoading) {
    return (
      <Button variant="ghost" disabled className="text-gray-400">
        Loading...
      </Button>
    );
  }

  if (isError) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <AlertCircle className="h-4 w-4 mr-2 text-yellow-500" />
              Auth Error
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Authentication configuration error. Please check your Supabase setup.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  if (!user) {
    return (
      <Button 
        onClick={signIn}
        className="bg-indigo-600 hover:bg-indigo-700"
      >
        Sign in with Google
      </Button>
    );
  }

  const userName = user.user_metadata?.full_name || user.email || 'User';
  const userEmail = user.email;
  const userAvatar = user.user_metadata?.avatar_url;
  
  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-2">
        <span className="text-gray-300">
          {userName.split(' ')[0]}
        </span>
        {isPremium && (
          <Badge variant="outline" className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black border-none text-xs py-0">
            PRO
          </Badge>
        )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage 
                src={userAvatar} 
                alt={userName} 
              />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            {isPremium && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{userName}</p>
                {isPremium && (
                  <Badge variant="outline" className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black border-none text-xs py-0">
                    PRO
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-500 truncate">{userEmail}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="h-4 w-4 mr-2" />
              <span>Manage Subscription</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-4 w-4 mr-2" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {!isPremium ? (
              <DropdownMenuItem>
                <Crown className="h-4 w-4 mr-2 text-yellow-400" />
                <span>Upgrade Plan</span>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>
                <Crown className="h-4 w-4 mr-2 text-yellow-400" />
                <span>Subscription Details</span>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>
              <UserPlus className="h-4 w-4 mr-2" />
              <span>Invite Team</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <HelpCircle className="h-4 w-4 mr-2" />
            <span>Help & Support</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>
            <LogOut className="h-4 w-4 mr-2" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
